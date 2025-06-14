const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
    .addTo(map);

// copied from https://cloudcannon.com/tutorials/hugo-beginner-tutorial/using-data-in-hugo/
let bounds = [];
for (let i = 0; i < markers.length; i++ ) {
    const marker = L.marker([markers[i].latitude, markers[i].longitude]).addTo(map);
    marker.bindPopup(markers[i].name);
    bounds.push([markers[i].latitude, markers[i].longitude]);
}

map.fitBounds(bounds);

// let bounds = [];
// markers.forEach(markerData => { // Renamed 'markerData' for clarity
//     const marker = L.marker([markerData.latitude, markerData.longitude]).addTo(map);
//     marker.bindPopup(markerData.name);
//     bounds.push([markerData.latitude, markerData.longitude]);
// });
// map.fitBounds(bounds);