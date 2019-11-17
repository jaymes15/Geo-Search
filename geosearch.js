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
    alert('request successful,please scroll down to view your result');
    GetMap();
  });
}

function GetMap() {
  let map = new Microsoft.Maps.Map('#myMap', {
    credentials: 'At4QSgi-CtS2RzIw1jTVBh7m-26b57Q_81HMxgDh1PSzcEXIzDLOylbG6iSGzdQd',
    center: new Microsoft.Maps.Location(cityLat, cityLog),
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    zoom: 10,
  });
}
