const PLACES = [
  {
    name: "Dolomites",
    location: "Italy",
    long: 11.85,
    lat: 46.433334,
    img: "assets/images/popular-destinations/dolomites.jpg",
    type: "mountains",
    price: 150, //added the price on each places to make it user friendly
    host: "Nick Williams",
    reviews: 4.5,
    details: "Beautiful mountain range in northeastern Italy.",
    additionalPictures: [
      "assets/images/popular-destinations/dolomites2.jpg",
      "assets/images/popular-destinations/dolomites3.jpg"
    ]
  },
  {
    name: "Algarve",
    location: "Portugal",
    long: -7.93044,
    lat: 37.019356,
    img: "assets/images/popular-destinations/algarve.jpg",
    type: "beach",
    price: 200,
  },
  {
    name: "Atlanta",
    location: "Georgia",
    long: -84.38633,
    lat: 33.753746,
    img: "assets/images/popular-destinations/atlanta.jpg",
    type: "city",
    price: 300,
  },
  {
    name: "Bali",
    location: "Indonesia",
    long: 115.188919,
    lat: -8.409518,
    img: "assets/images/popular-destinations/bali.jpg",
    type: "beach",
    price: 300,
  },
  {
    name: "Istanbul",
    location: "Turkey",
    long: 28.97953,
    lat: 41.015137,
    img: "assets/images/popular-destinations/istanbul.jpg",
    type: "city",
    price: 300,
  },
  {
    name: "Bass Lake",
    location: "California",
    long: -119.5664,
    lat: 37.3247,
    img: "assets/images/popular-destinations/bass-lake.jpg",
    type: "mountains",
    price: 300,
  },
  {
    name: "Rio de Janeiro",
    location: "Brazil",
    long: -43.196388,
    lat: -22.908333,
    img: "assets/images/popular-destinations/rio.jpg",
    type: "city",
    price: 300,
  },
  {
    name: "Big Sky",
    location: "Montana",
    long: -111.25312,
    lat: 45.26599,
    img: "assets/images/popular-destinations/big-sky.jpg",
    type: "mountains",
    price: 300,
  },
  {
    name: "Delray Beach",
    location: "Florida",
    long: -80.105545,
    lat: 26.459763,
    img: "assets/images/popular-destinations/delray-beach.jpg",
    type: "beach",
    price: 400,
  },
  {
    name: "Patagonia",
    location: "Argentina",
    long: -68.9063,
    lat: -41.8102,
    img: "assets/images/popular-destinations/patagonia.jpg",
    type: "mountains",
    price: 300,
  },
  {
    name: "Marco Island",
    location: "Florida",
    long: -81.714722,
    lat: 25.940556,
    img: "assets/images/popular-destinations/marco-island.jpg",
    type: "beach",
    price: 400,
  },
  {
    name: "Nashville",
    location: "Tennessee",
    long: -86.76796,
    lat: 36.174465,
    img: "assets/images/popular-destinations/nashville.jpg",
    type: "city",
    price: 400,
    
  },
  {
    name: "Pagosa Springs",
    location: "Colorado",
    long: -107.025749,
    lat: 37.267185,
    img: "assets/images/popular-destinations/pagosa-springs.jpg",
    type: "mountains",
    price: 400,
  },
  {
    name: "Lefkada",
    location: "Greece",
    long: 20.65,
    lat: 38.7167,
    img: "assets/images/popular-destinations/lefkada-greece.jpg",
    type: "beach",
    price: 400,
  },
  {
    name: "Seoul",
    location: "South Korea",
    long: 127.024612,
    lat: 37.5326,
    img: "assets/images/popular-destinations/seoul.jpg",
    type: "city",
    price: 400,
  },
  {
    name: "Swiss Alps",
    location: "Switzerland",
    long: 8.55682,
    lat: 46.5555,
    img: "assets/images/popular-destinations/swiss-alps.jpg",
    type: "mountains",
    price: 400,
  },
  {
    name: "Wrangell Mountains",
    location: "Alaska",
    long: -142.985687,
    lat: 61.710445,
    img: "assets/images/popular-destinations/wrangell.jpg",
    type: "mountains",
    price: 400,
  },
  {
    name: "Mount Fuji",
    location: "Japan",
    long: 138.726379,
    lat: 35.363602,
    img: "assets/images/popular-destinations/mt-fuji.jpg",
    type: "mountains",
    price: 400,
  },
  {
    name: "Amsterdam",
    location: "Holland",
    long: 4.89707,
    lat: 52.377956,
    img: "assets/images/popular-destinations/amsterdam.jpg",
    type: "city",
    price: 200,
  },
  {
    name: "Venice",
    location: "Italy",
    long: 12.327145,
    lat: 45.438759,
    img: "assets/images/popular-destinations/venice.jpg",
    type: "city",
    price: 400,
  },
  {
    name: "London",
    location: "England",
    long: -0.118092,
    lat: 51.509865,
    img: "assets/images/popular-destinations/london.jpg",
    type: "city",
    price: 500
  },
  {
    name: "Maldives",
    location: "South Asia",
    long: 73.3996584,
    lat: 1.924992,
    img: "assets/images/popular-destinations/maldives.jpg",
    type: "beach",
    price: 200
  },
  {
    name: "Venice Beach",
    location: "California",
    long: -118.472023,
    lat: 33.98827,
    img: "assets/images/popular-destinations/venice-beach.jpg",
    type: "beach",
    price: 100
  },
  {
    name: "Maui",
    location: "Hawaii",
    long: -156.331924,
    lat: 20.798363,
    img: "assets/images/popular-destinations/maui.jpg",
    type: "beach",
    price: 500
  },
];