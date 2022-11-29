# Huron River Subway Prototype

This prototype is live at [https://ryanbaxter99.github.io/Huron-River-Subway-Prototype](https://ryanbaxter99.github.io/Huron-River-Subway-Prototype/).

<br />

Authored by: Ryan Baxter, Paul Chafetz, Gary Shou, and Kevin Na

## Code Overview

### Map construction

This codeblock shows what is used to construct the mapbox GL object. Unless the scope of this project expands, the zoom, center, and maxBounds parameters should not be changed. However, if the need arises, the map can be recentered by editing the center parameter with the desired longitude and latitude.

```
const map = new mapboxgl.Map({
    accessToken: "pk.eyJ1IjoicnlhbmJheHRlcjk5IiwiYSI6ImNsYThlbm8wZDAyem0zb3BkZWo5OWdoa2sifQ.7ykBOLuBfbVar_kl3DsN5Q",
    container: "map", // targets this div ID
    style: "mapbox://styles/ryanbaxter99/cla8h6cwb000n14n7evkecgvf",
    center: [-83.7, 42.6], // [lg, lt]
    zoom: 8, // zoom covers central east Michigan
    maxBounds: [
        [-90.168537, 41.765717], // southwest coordinates
        [-80.164952, 45.709707], // northeast coordinates
    ],
    maxZoom: 12, // max zoom level allowed
});
```

### Adding new lakes

In order to add new lakes, create an additional entry in the lakes object following this format.

```
    name: "lakeName",
    lng: longitude,
    lat: latitude,
    popup: `
        <--HTML-->
```

The popup is rendered using HTML and can be adjusted as desired. Currently the format is:

```
        <h2><strong>Lake Name</strong></h2>
        <p><strong>Dam: </strong>Dam Name</p>
        <p><strong>Lake Size: </strong>Size (Acres)</p>
        <p><strong>Max Depth </strong>Depth (Feet)</p>`
```

### Do not touch components

This is the lake marker factory. There should be no reason to touch this unless further attributes are needed for each lake marker.

```
lakes.forEach(lake => {
    const el = document.createElement('div');
    el.className = "marker " + lake.name;
    new mapboxgl.Marker(el)
        .setLngLat([lake.lng, lake.lat])
        .setPopup(new mapboxgl.Popup().setHTML(lake.popup))
        .addTo(map);
});
```

This is the border around the Huron River Watershed. They should not be adjusted.

```
const lineCoordinates = [
    [-84, 42.3],        // southwest
    [-83.85, 42.86],    // northwest
    [-83.25, 42.81],    // northeast
    [-83.36, 42.16],    // southeast
    [-84, 42.3],        // back to start
];
```

This is to render the border. Do not modify unless it breaks.

```
map.on('load', () => {
    map.addSource('line', {
        type: 'geojson',
        data: {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: lineCoordinates
            }
        }
    });

    map.addLayer({
        id: 'line',
        type: 'line',
        source: 'line',
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': '#FFF',
            'line-width': 4
        }
    });
});
```
