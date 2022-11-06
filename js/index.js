// accessToken taken from https://codepen.io/bradleyboy/pen/Yryybq
mapboxgl.accessToken = "pk.eyJ1IjoiYnJhZGRhaWx5IiwiYSI6ImNqN21iam90ZzJ3MnEzM3F1anNkNWIydjMifQ.Dez6MhslaJs8ROSplWPSpQ";

const mapboxSettings = {
    container: "map", // targets this div ID
    style: "mapbox://styles/mapbox/streets-v11", // view with streets
    center: [-84.7, 43.6], // [lg, lt] north of Lansing
    zoom: 6, // approx the size of Michigan
    projection: "globe", // display as a globe
    interactive: false, // disable user interaction
    // optionally, use bounds/maxBounds instead of disabling interactivity
};

const map = new mapboxgl.Map(mapboxSettings);

const marker = new mapboxgl.Marker()
    .setLngLat([-84.7, 43.6])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p>Paragraph one</p>
        <p>Paragraph two</p>
        `))
    .addTo(map);
