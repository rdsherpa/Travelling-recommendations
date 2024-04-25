// SWEET ALERT ON PAGE LOAD
swal({
  title: "Where do you want to go?",
  icon: "assets/images/destination-types.png",
  padding: '3rem',
  buttons: {
    city: {
      text: "City",

      value: "city",
    },
    beach: {
      text: "Beach",
      value: "beach",
    },
    mountains: {
      text: "Mountains",
      value: "mountains",
    },
  },
  closeOnClickOutside: false,
}).then((value) => {
  let typePreference = value;
  findRecommendations(typePreference);
});

const vectorSource = new ol.source.Vector();
const vectorLayer = new ol.layer.Vector({
  source: vectorSource,
  updateWhileAnimating: true,
});

const iconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 36],
    anchorXUnits: "fraction",
    anchorYUnits: "pixels",
    trigger: "click",
    // img: pinImage,
    src: './assets/images/map-pin.png'
  }),
});

const view = new ol.View({
  center: ol.proj.fromLonLat([-117.038834, 34.033298]),
  zoom: 4,
});

// OL CONFIG
const map = new ol.Map({
  target: document.getElementById("map"),
  layers: [
    new ol.layer.Tile({
      preload: 4,
      source: new ol.source.OSM(),
    }),
    vectorLayer,
  ],
  view: view,
});

// Cursor pointer when pin hovered
map.on("pointermove", function(e) {
  const pixel = map.getEventPixel(e.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  document.getElementById("map").style.cursor = hit ? "pointer" : "";
});

// find recommendations based on type
function findRecommendations(type) {
  let filteredPlaces = filterPlacesByType(type);
  if (filteredPlaces) {
    populateRecommendationCards(filteredPlaces);
    filteredPlaces.forEach((place) => {
      addPlaceToMegaMenu(place);
      addMarkerToMap(place);
    });
  } else {
    console.log("filterPlacesByType function error");
  }
}

const popup = new ol.Overlay({
  element: document.getElementById("popup"),
});
map.addOverlay(popup);

// Close the popup when the map is moved
map.on("movestart", bootstrap.Popover.getInstance(popup.getElement()));

map.on("click", (e) => {
  const feature = map.forEachFeatureAtPixel(e.pixel, (feature) => feature);
  let popover = bootstrap.Popover.getInstance(popup.getElement());
  if (!feature && popover) {
    popover.dispose();
  }
  if (!feature) {
    return;
  }
  if (popover) {
    popover.dispose();
  }
  popup.setPosition(e.coordinate);
  popover = new bootstrap.Popover(document.querySelector("#popup"), {
    animation: false,
    container: document.querySelector("#popup"),
    content: `<img src=${feature.values_.attributes.img} alt=${feature.values_.name} class="img-fluid" style="min-width:300px;" />`,
    html: true,
    placement: "bottom",
    title: `<h3 class="h5 text-center m-0">${feature.values_.name}</h3>`,
  });
  popover.show();
});

let flying = false;

// fly map to the marker clicked on
function flyTo(location, done) {
  const duration = 1500;
  const zoom = view.getZoom();
  let parts = 2;
  let called = false;
  function callback(complete) {
    --parts;
    if (called) {
      return;
    }
    if (parts === 0 || !complete) {
      called = true;
      done(complete);
    }
  }
  if (!flying) {
    flying = true;
    view.animate(
      {
        center: location,
        duration: duration,
      },
      callback
    );

    view.animate(
      {
        zoom: zoom - 1,
        duration: duration / 2,
      },
      {
        zoom: zoom,
        duration: duration / 2,
      },
      callback
    );
  }
}

// fly to a specific place on the map by name
function centerPlaceOnMap(placeName) {
  // find place object by name in PLACES array using findPlaceByName function
  let placeObj = findPlaceByName(placeName);
  if (placeObj) {
    // scroll to map
    document.getElementById("map").scrollIntoView();
    // fly map to the marker clicked on
    flyTo(ol.proj.fromLonLat([placeObj.long, placeObj.lat]), function() {
      flying = false;
    });
  } else {
    console.log("findPlaceByName function error");
  }
}

// DOM nodes for megamenu columns
const _megaMenuCol1 = document.getElementById("mega-menu-col-1");
const _megaMenuCol2 = document.getElementById("mega-menu-col-2");

function addPlaceToMegaMenu(place) {
  // nav button populating place name and scroll to map
  let menuItemContent = `
    <li onclick="centerPlaceOnMap('${place.name}')">
      <a class="dropdown-item">
        ${place.name}
      </a>
    </li>
    `;
  // add a dropdown item to the nav menu with centerPlaceOnMap function
  if (_megaMenuCol1.childElementCount < 4) {
    _megaMenuCol1.insertAdjacentHTML("beforeend", menuItemContent);
  } else {
    _megaMenuCol2.insertAdjacentHTML("beforeend", menuItemContent);
  }
}

// add marker to the map based on a place
function addMarkerToMap(place) {
  let newPoint = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([place.long, place.lat])),
    name: place.name,
    attributes: { img: place.img },
  });
  vectorSource.addFeature(newPoint);
  newPoint.setStyle(iconStyle);
}
