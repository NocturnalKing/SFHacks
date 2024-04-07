var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
exports.XMLHttpRequest = XMLHttpRequest;

let request = new XMLHttpRequest();

request.open('POST', "https://api.openrouteservice.org/v2/directions/driving-car?Authorization=5b3ce3597851110001cf624860a17d1d27434e038a437dd74419af40&coordinates=[[8.681495,49.41461],[8.686507,49.41943],[8.687872,49.420318]]&units=mi");


request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', '5b3ce3597851110001cf624860a17d1d27434e038a437dd74419af40');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

const body = '{"coordinates":[[8.681495,49.41461],[8.686507,49.41943],[8.687872,49.420318]],"maneuvers":"false"}';

request.send(body);