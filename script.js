// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
function filterPlacesByType(typePreference) {
  let newFilteredPlaces = [];
  for (let i = 0; i < PLACES.length; i++) {
    if (PLACES[i].type.toLowerCase() === typePreference.toLowerCase()) {
      newFilteredPlaces.push(PLACES[i]);
    }
  }
  return newFilteredPlaces;
}
// Step 1: Create a new filteredPlaces array and store it in a variable
//  let `newFilterdPlaces = []`; essentially initializes a variable named indices as an empty array, ready to store indices of matching elements during the execution of the filterPlacesByType function.
// Step 2: Loop through PLACES

// Step 3: If a place object's type property matches the typePreference parameter, add it to filteredPlaces
// I used `toLowerCase` to ensure case-insensitive comparision. 

// Step 4: After the loop, return filteredPlaces


// let filteredPlaces = filterPlacesByType("beach");
// console.log(filteredPlaces);

// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable
  let newCol = document.createElement("div");
  // Step 2: Add the col class to the new div element
  newCol.classList.add("col");
  // Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed. More info - https://wesbos.com/template-strings-html

  newCol.innerHTML = `
<div class="col">
  <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
    <img src="${place.img}" class="card-img-top h-100" alt="...">
    <div class="card-body">
      <h5 class="card-title">${place.name}</h5>
      <p class="card-text">${place.location}</p>
      <p class="card-text">Price: $${place.price}</p>
    </div>
  </div>
</div>
`;

  // Step 4: Return the element
  return newCol;
}


// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id of "recommendations" in a variable
  let reccommendationsContainer = document.getElementById("recommendations");
  // Step 2: Clear the "recommendations" 
  reccommendationsContainer.innerHTML = '';

  // Step 3: Loop through the filteredPlaces array
  for (let i = 0; i < filteredPlaces.length; i++) {
    // Step 4: Create a card for each place using the createCard function
    // calling the function from task 2 `createCard`
    let card = createCard(filteredPlaces[i]);

    // Step 5: Add/append each card to the recommendations DOM element
    reccommendationsContainer.appendChild(card);
  }
}

// Task 4
function findPlaceByName(placeName) {
  // Step 1: Loop through the PLACES array
  for (let i = 0; i < PLACES.length; i++) {
    // Step 2: If a place object's name property matches the placeName parameter, return that place object
    if (PLACES[i].name === placeName) {
      return PLACES[i]
    }
  }
}


// shows the detail of the places: 
// Need to create a function called showPlaceDetails
function showPlaceDetails(place) {
  let detailsContainer = document.createElement("div");
  detailsContainer.classList.add("col");

  detailsContainer.innerHTML = `
    <div class="col">
      <div class="card h-100">
        <img src="${place.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text">Location: ${place.location}</p>
          <p class="card-text">Price: $${place.price}</p>
          <p class="card-text">Host: ${place.host}</p>
          <p class="card-text">Reviews: ${place.reviews}</p>
          <p class="card-text">Details: ${place.details}</p>
          <div class="row row-cols-2">
            <div class="col">
              <img src="${place.additionalPictures[0]}" class="img-fluid rounded" alt="...">
            </div>
            <div class="col">
              <img src="${place.additionalPictures[1]}" class="img-fluid rounded" alt="...">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
// Append the details container to the DOM
document.getElementById("detials").innerHTML = "";
document.getElementById("details").appendChild(detailsContainer);
}

document.addEventListener("DOMContentLoaded", function() {
  // Selects all images with class "card-img-top"
  let images = document.querySelectorAll(".card-img-top");

  // then we loop through each image
  images.forEach(img => {
    // adding click event listner
    img.addEventListener("click", function() {
      // Getting the name of the place from the image's date attribute
      let placeName = this.dataset.placeName;

      // finding the place in the PLACES array with the same name
      let place = PLACES.find(place => place.name === placeName);

      // Calling the function to show place details
      showPlaceDetails(place);
    })
  })
})
