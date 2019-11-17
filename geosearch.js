/* eslint-disable no-unused-vars */
/* eslint prefer-arrow-callback: 0 */
/* eslint-env jquery */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable-line prefer-template */
/* eslint-disable  prefer-const */
function geocodeString() {
  let searchtext = document.getElementById('search-text').value;
  // eslint-disable-next-line prefer-template
  $.get('https://api.opencagedata.com/geocode/v1/json?q=' + searchtext + '&key=0dd5cc6ce0734c178fb21b728ad0711f', function (data, status) {
    let cityLat = data.results[0].geometry.lat;
    let cityLog = data.results[0].geometry.lng;
  });
}
