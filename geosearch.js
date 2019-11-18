/* eslint-disable no-unused-vars */
/* eslint prefer-arrow-callback: 0 */
/* eslint-env jquery */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable-line prefer-template */
/* eslint-disable  prefer-const */
/* eslint-disable  no-use-before-define */
/* eslint-disable   no-undef */
let cityLog;
let cityLat;
function geocodeString() {
  let searchtext = document.getElementById('search-text').value;
  // eslint-disable-next-line prefer-template
  $.get('https://api.opencagedata.com/geocode/v1/json?q=' + searchtext + '&key=0dd5cc6ce0734c178fb21b728ad0711f', function (data, status) {
    cityLat = data.results[0].geometry.lat;
    cityLog = data.results[0].geometry.lng;
    GetMap();
    displayWeatherCondition();
    alert('request successful,please scroll down to view your result');
  });
}

function GetMap() {
  let map = new Microsoft.Maps.Map('#myMap', {
    credentials: 'At4QSgi-CtS2RzIw1jTVBh7m-26b57Q_81HMxgDh1PSzcEXIzDLOylbG6iSGzdQd',
    center: new Microsoft.Maps.Location(cityLat, cityLog),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 10,
  });
  let center = map.getCenter();
  let pin = new Microsoft.Maps.Pushpin(center, {
    title: 'search result',
    subTitle: 'City Center',
    text: '1',
  });
  map.entities.push(pin);
}

function displayWeatherCondition() {
  $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLog}&APPID=58aa1cc0f3d6ef06ce61b881bd643c57`, function (data, status) {
    let temperature = document.getElementById('temperature');
    temperature.textContent = data.main.temp;
    let weatherCondition = document.getElementById('weathercondition');
    weatherCondition.textContent = data.weather[0].description;
    let windSpeed = document.getElementById('windspeed');
    windSpeed.textContent = `Wind speed:${data.wind.speed}mph`;
    let humidity = document.getElementById('humidity');
    humidity.textContent = `Humidity:${data.main.humidity}%`;
    let placeName = document.getElementById('placename');
    placeName.textContent = data.name;
  });
}
