const ipAPI = `https://api.ipify.org/?format=json`;
var ipURL = `https://geo.ipify.org/api/v1?apiKey=at_jS3yc4MT2FvdKXBIBVp4EonaRkwx0&ipAddress=`;

//My ip address
var my_ip;
// Elements that will be updated
const get_ip = document.getElementById("ip");
const get_location = document.getElementById("location");
const get_timezone = document.getElementById("timezone");
const get_isp = document.getElementById("isp");

// Search input & Search btn
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("submit");

var my_ip;

function fetchAPI(input) {
  var lat;
  var long;
  fetch(input)
    .then((res) => res.json())
    .then((data) => {
      get_ip.innerHTML = data.ip;
      get_location.innerHTML = `${data.location.country} ${data.location.city} ${data.location.postalCode}`;
      get_timezone.innerHTML = data.location.timezone;
      get_isp.innerHTML = data.isp;

      lat = data.location.lat;
      long = data.location.lng;

      L.marker([data.location.lat, data.location.lng]).addTo(map);
      map.flyTo([lat, long], 15);
    });
}

function getLat(input) {
  var lat;
  fetch(input)
    .then((res) => res.json())
    .then((data) => {
      lat = data.location.lat;
    });
  return lat;
}

fetch(ipURL)
  .then((res) => res.json())
  .then((data) => {
      console.log(data);
    get_ip.innerHTML = data.ip;
    get_location.innerHTML = `${data.location.country} ${data.location.city} ${data.location.postalCode}`;
    get_timezone.innerHTML = data.location.timezone;
    get_isp.innerHTML = data.isp;

    L.marker([data.location.lat, data.location.lng]).addTo(map);
    map.flyTo([data.location.lat, data.location.lng], 15);
  });

function getLat() {}

// Submit btn event listener
searchBtn.addEventListener("click", function () {
  var searchValue = searchInput.value;
  ipURL = `https://geo.ipify.org/api/v1?apiKey=at_jS3yc4MT2FvdKXBIBVp4EonaRkwx0&ipAddress=${searchValue}`;
  fetchAPI(ipURL);
});

window.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        var searchValue = searchInput.value;
        ipURL = `https://geo.ipify.org/api/v1?apiKey=at_jS3yc4MT2FvdKXBIBVp4EonaRkwx0&ipAddress=${searchValue}`;
        fetchAPI(ipURL);
    }
});

// Harta
var map = L.map("map").setView([0, 0], 1);

L.tileLayer(
  "https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=rSF3vmfzhd1KJeLIxOpf",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);