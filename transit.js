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


/* JSON output: 

{"bbox":[8.681423,49.414599,8.690123,49.420514],"routes":[{"summary":{"distance":1372.6,"duration":292.79999999999995},"segments":[{"distance":891.1,"duration":189.7,"steps":[{"distance":1.8,"duration":0.4,"type":11,"instruction":"Head
west on
Gerhart-Hauptmann-Straße","name":"Gerhart-Hauptmann-Straße","way_points":[0,1]},{"distance":313.8,"duration":75.3,"type":1,"instruction":"Turn
right onto
Wielandtstraße","name":"Wielandtstraße","way_points":[1,6]},{"distance":251.7,"duration":36.2,"type":1,"instruction":"Turn
right onto
Mönchhofstraße","name":"Mönchhofstraße","way_points":[6,10]},{"distance":211.8,"duration":50.8,"type":0,"instruction":"Turn
left onto
Keplerstraße","name":"Keplerstraße","way_points":[10,13]},{"distance":109.5,"duration":26.3,"type":1,"instruction":"Turn
right onto
Moltkestraße","name":"Moltkestraße","way_points":[13,14]},{"distance":2.4,"duration":0.6,"type":0,"instruction":"Turn
left onto
Werderplatz","name":"Werderplatz","way_points":[14,15]},{"distance":0.0,"duration":0.0,"type":10,"instruction":"Arrive
at Werderplatz, on the
right","name":"-","way_points":[15,15]}]},{"distance":481.5,"duration":103.1,"steps":[{"distance":2.4,"duration":0.6,"type":11,"instruction":"Head
south on
Werderplatz","name":"Werderplatz","way_points":[15,16]},{"distance":265.5,"duration":63.7,"type":0,"instruction":"Turn
left onto
Moltkestraße","name":"Moltkestraße","way_points":[16,20]},{"distance":83.0,"duration":7.5,"type":2,"instruction":"Turn
sharp left onto Handschuhsheimer Landstraße, B 3","name":"Handschuhsheimer Landstraße, B
3","way_points":[20,22]},{"distance":130.6,"duration":31.4,"type":0,"instruction":"Turn left onto
Roonstraße","name":"Roonstraße","way_points":[22,23]},{"distance":0.0,"duration":0.0,"type":10,"instruction":"Arrive at
Roonstraße, straight
ahead","name":"-","way_points":[23,23]}]}],"bbox":[8.681423,49.414599,8.690123,49.420514],"geometry":"ghrlHir~s@?BIC{ELgDo@aBa@}@I?sB?k@BwD?_JgAJgHt@I@]iHC?B?KuB]oFASg@wImAt@y@f@d@bJ","way_points":[0,15,23],"legs":[]}],"metadata":{"attribution":"openrouteservice.org
| OpenStreetMap
contributors","service":"routing","timestamp":1712486810065,"query":{"coordinates":[[8.681495,49.41461],[8.686507,49.41943],[8.687872,49.420318]],"profile":"driving-car","format":"json"},"engine":{"version":"7.1.1","build_date":"2024-01-29T14:41:12Z","graph_date":"2024-03-31T14:14:00Z"}}}
*/