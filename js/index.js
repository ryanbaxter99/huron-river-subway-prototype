// accessToken taken from https://codepen.io/bradleyboy/pen/Yryybq
mapboxgl.accessToken = "pk.eyJ1IjoiYnJhZGRhaWx5IiwiYSI6ImNqN21iam90ZzJ3MnEzM3F1anNkNWIydjMifQ.Dez6MhslaJs8ROSplWPSpQ";

const mapboxSettings = {
    container: "map", // targets this div ID
    style: "mapbox://styles/mapbox/streets-v11", // view with streets
    center: [-83.7, 42.6], // [lg, lt] east of Lansing
    zoom: 8, // zoom covers central east Michigan
    maxBounds: [
        [-90.168537, 41.765717], // southwest coordinates
        [-80.164952, 45.709707], // northeast coordinates
    ],
};

const map = new mapboxgl.Map(mapboxSettings);

const markers = [
    // Big Lake
    new mapboxgl.Marker()
    .setLngLat([-83.51909881189316, 42.721293972977314])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Big Lake Dam</p>`)),

    // Pontiac Lake
    new mapboxgl.Marker()
    .setLngLat([-83.45103241607949, 42.664682472492984])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Pantiac Lake Dam</p>`)),

    // Oxbow Lake
    new mapboxgl.Marker()
    .setLngLat([-83.47983124810104, 42.645980588668685])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Oxbow Lake Dam</p>`)),

    // Cedar Island Lake
    new mapboxgl.Marker()
    .setLngLat([-83.48099571145308, 42.63039758294164])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Cedar Island Lake Dam</p>`)),

    // South Commerce Lake
    new mapboxgl.Marker()
    .setLngLat([-83.49968514670081, 42.57435407009425])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Commerce Dam</p>`)),

    // North Commerce Lake
    new mapboxgl.Marker()
    .setLngLat([-83.48986218111924, 42.58293304302951])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Commerce Dam</p>`)),

    // Proud Lake
    new mapboxgl.Marker()
    .setLngLat([-83.52097367057802, 42.56785846280867])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Proud Lake Dam</p>`)),

    // Hubbell Pound
    new mapboxgl.Marker()
    .setLngLat([-83.61555794821616, 42.58579168920394])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Hubbell Dam</p>`)),

    // Kent Lake
    new mapboxgl.Marker()
    .setLngLat([-83.64676344950117, 42.5289401382445])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Kent Lake Dam</p>`)),

    // Base Line Lake
    new mapboxgl.Marker()
    .setLngLat([-83.8926796865478, 42.425370235294935])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Flook Dam</p>`)),

    // Barton Pond
    new mapboxgl.Marker()
    .setLngLat([-83.7584324082047, 42.31377611849595])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Barton Dam</p>`)),

    // Ford Lake
    new mapboxgl.Marker()
    .setLngLat([-83.60534047890552, 42.21892656979439])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>Ford Lake Dam</p>`)),

    // Belleville Lake
    new mapboxgl.Marker()
    .setLngLat([-83.49774610909319, 42.213428101123355])
    .setPopup(new mapboxgl.Popup().setHTML(`<p><b>Dam: </b>French Landing Dam</p>`)),
];

const lineCoordinates = [
    [-84, 42.3],        // southwest
    [-83.85, 42.86],    // northwest
    [-83.25, 42.81],    // northeast
    [-83.36, 42.16],    // southeast
    [-84, 42.3],        // back to start
];

markers.forEach(marker => marker.addTo(map));

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
            'line-color': '#000',
            'line-width': 8
        }
    });
});
