var request = new XMLHttpsRequest();

request.open('GET', 'https://api.openrouteservice.org?api_key=5b3ce3597851110001cf624860a17d1d27434e038a437dd74419af40&start=8.681495,49.41461&end=8.687872,49.420318')

request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status', this.status);
        console.log('Headers', this.getAllResponseHeader)
        console.log('Body', this.responseText)
    }
};

request.send();