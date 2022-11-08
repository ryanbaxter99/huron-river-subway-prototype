// accessToken taken from https://codepen.io/bradleyboy/pen/Yryybq
mapboxgl.accessToken = "pk.eyJ1IjoiYnJhZGRhaWx5IiwiYSI6ImNqN21iam90ZzJ3MnEzM3F1anNkNWIydjMifQ.Dez6MhslaJs8ROSplWPSpQ";

const mapboxSettings = {
    container: "map", // targets this div ID
    style: "mapbox://styles/mapbox/streets-v11", // view with streets
    center: [-84.7, 43.6], // [lg, lt] north of Lansing
    zoom: 20, // approx the size of Michigan
    projection: "globe", // display as a globe
    interactive: true, // disable user interaction
    // optionally, use bounds/maxBounds instead of disabling interactivity
};

const map = new mapboxgl.Map(mapboxSettings);

const bigLake = new mapboxgl.Marker()
    .setLngLat([-83.51909881189316, 42.721293972977314])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Big Lake Dam</p>
        `))
    .addTo(map);

const pontiacLake = new mapboxgl.Marker()
    .setLngLat([-83.45103241607949, 42.664682472492984])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Pantiac Lake Dam</p> 
        `))
    .addTo(map);

const oxbowLake = new mapboxgl.Marker()
    .setLngLat([-83.47983124810104, 42.645980588668685])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Oxbow Lake Dam</p> 
        `))
    .addTo(map);

const cedarIslandLake = new mapboxgl.Marker()
    .setLngLat([-83.48099571145308, 42.63039758294164])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Cedar Island Lake Dam</p> 
        `))
    .addTo(map);

const southCommerceLake = new mapboxgl.Marker()
    .setLngLat([-83.49968514670081, 42.57435407009425])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Commerce Dam</p> 
        `))
    .addTo(map);

const northCommerceLake = new mapboxgl.Marker()
    .setLngLat([-83.48986218111924, 42.58293304302951])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Commerce Dam</p> 
        `))
    .addTo(map);

const proudLake = new mapboxgl.Marker()
    .setLngLat([-83.52097367057802, 42.56785846280867])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Proud Lake Dam</p> 
        `))
    .addTo(map);

const hubbellPound = new mapboxgl.Marker()
    .setLngLat([-83.61555794821616, 42.58579168920394])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Hubbell Dam</p> 
        `))
    .addTo(map);

const kentLake = new mapboxgl.Marker()
    .setLngLat([-83.64676344950117, 42.5289401382445])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Kent Lake Dam</p> 
        `))
    .addTo(map);

const baseLineLake = new mapboxgl.Marker()
    .setLngLat([-83.8926796865478, 42.425370235294935])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Flook Dam</p> 
        `))
    .addTo(map);

const bartonPond = new mapboxgl.Marker()
    .setLngLat([-83.7584324082047, 42.31377611849595])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Barton Dam</p> 
        `))
    .addTo(map);

const fordLake = new mapboxgl.Marker()
    .setLngLat([-83.60534047890552, 42.21892656979439])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>Ford Lake Dam</p> 
        `))
    .addTo(map);

const bellevilleLake = new mapboxgl.Marker()
    .setLngLat([-83.49774610909319, 42.213428101123355])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><b>Dam: </b>French Landing Dam</p> 
        `))
    .addTo(map);


