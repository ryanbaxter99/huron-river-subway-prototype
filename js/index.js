
// Creates a Mapbox GL JS map
const map = new mapboxgl.Map({
    accessToken: "pk.eyJ1IjoicnlhbmJheHRlcjk5IiwiYSI6ImNsYThlbm8wZDAyem0zb3BkZWo5OWdoa2sifQ.7ykBOLuBfbVar_kl3DsN5Q",
    container: "map", // targets this div ID
    style: "mapbox://styles/ryanbaxter99/cla8h6cwb000n14n7evkecgvf",
    center: [-83.7, 42.6], // [lg, lt] east of Lansing
    zoom: 8, // zoom covers central east Michigan
    maxBounds: [
        [-90.168537, 41.765717], // southwest coordinates
        [-80.164952, 45.709707], // northeast coordinates
    ],
    maxZoom: 12, // max zoom level allowed
});

// List of lakes to be marked
const lakes = [
    {
        name: "bigLake",
        lng: -83.51909881189316,
        lat: 42.721293972977314,
        popup: `
        <h2><strong>Big Lake</strong></h2> 
        <p><strong>Dam: </strong>Big Lake Dam</p> 
        <p><strong>Lake Size: </strong>215 acres</p> 
        <p><strong>Max Depth </strong>13ft</p>`
    },
    {
        name: "pontiacLake",
        lng: -83.45103241607949,
        lat: 42.664682472492984,
        popup: `
        <h2><strong>Pontiac Lake</strong></h2> 
        <p><strong>Dam: </strong>Pontiac Lake Dam</p> 
        <p><strong>Lake Size: </strong>590 acres</p 
        <p><strong>Max Depth </strong>38ft</p>`
    },
    {
        name: "oxbowLake",
        lng: -83.47983124810104,
        lat: 42.645980588668685,
        popup: `
        <h2><strong>Oxbow Lake</strong></h2> 
        <p><strong>Dam: </strong>Oxbow Lake Dam</p> 
        <p><strong>Lake Size: </strong>280 acres</p> 
        <p><strong>Max Depth </strong>71ft</p>`
    },
    {
        name: "cedarIslandLake",
        lng: -83.48099571145308,
        lat: 42.63039758294164,
        popup: `
        <h2><strong>Cedar Island Lake</strong></h2> 
        <p><strong>Dam: </strong>Cedar Island Lake Dam</p> 
        <p><strong>Lake Size: </strong>114 acres</p> 
        <p><strong>Max Depth </strong>71ft</p>`
    },
    {
        name: "southCommerceLake",
        lng: -83.49968514670081,
        lat: 42.57435407009425,
        popup: `
        <h2><strong>South Commerce Lake</strong></h2> 
        <p><strong>Dam: </strong>Commerce Dam</p> 
        <p><strong>Lake Size: </strong>236 acres</p> 
        <p><strong>Max Depth </strong>66ft</p>`
    },
    {
        name: "northCommerceLake",
        lng: -83.48986218111924,
        lat: 42.58293304302951,
        popup: `
        <h2><strong>North Commerce Lake</strong></h2> 
        <p><strong>Dam: </strong>Commerce Dam</p> 
        <p><strong>Lake Size: </strong>236 acres</p> 
        <p><strong>Max Depth </strong>66ft</p>`
    },
    {
        name: "proudLake",
        lng: -83.52097367057802,
        lat: 42.56785846280867,
        popup: `
        <h2><strong>Proud Lake</strong></h2> 
        <p><strong>Dam: </strong>Proud Lake Dam</p> 
        <p><strong>Lake Size: </strong>104 acres</p>
        <p><strong>Max Depth </strong>39ft</p>`
    },
    {
        name: "hubbellPound",
        lng: -83.61555794821616,
        lat: 42.58579168920394,
        popup: `
        <h2><strong>Hubbell Lake</strong></h2> 
        <p><strong>Dam: </strong>Hubbell Dam</p> 
        <p><strong>Lake Size: </strong> acres</p>
        <p><strong>Max Depth </strong>ft</p>`
    },
    {
        name: "kentLake",
        lng: -83.64676344950117,
        lat: 42.5289401382445,
        popup: `
        <h2><strong>Kent Lake</strong></h2> 
        <p><strong>Dam: </strong>Kent Lake Dam</p> 
        <p><strong>Lake Size: </strong>1005 acres</p>
        <p><strong>Max Depth </strong>38ft</p>`
    },
    {
        name: "baseLineLake",
        lng: -83.8926796865478,
        lat: 42.425370235294935,
        popup: `
        <h2><strong>Base Line Lake</strong></h2> 
        <p><strong>Dam: </strong>Flook Dam</p> 
        <p><strong>Lake Size: </strong>255 acres</p>
        <p><strong>Max Depth </strong>60ft</p>`
    },
    {
        name: "bartonPond",
        lng: -83.7584324082047,
        lat: 42.31377611849595,
        popup: `
        <h2><strong>Barton Lake</strong></h2> 
        <p><strong>Dam: </strong>Barton Dam</p> 
        <p><strong>Lake Size: </strong>302 acres</p>
        <p><strong>Max Depth </strong>30ft</p>`
    },
    {
        name: "fordLake",
        lng: -83.60534047890552,
        lat: 42.21892656979439,
        popup: `
        <h2><strong>Ford Lake</strong></h2> 
        <p><strong>Dam: </strong>Ford Lake Dam</p> 
        <p><strong>Lake Size: </strong>975 acres</p>
        <p><strong>Max Depth </strong>30ft</p>`
    },
    {
        name: "bellevilleLake",
        lng: -83.49774610909319,
        lat: 42.213428101123355,
        popup: `
        <h2><strong>Belleville Lake</strong></h2> 
        <p><strong>Dam: </strong>French Landing Dam</p> 
        <p><strong>Lake Size: </strong>1270 acres</p>
        <p><strong>Max Depth </strong>30ft</p>`
    },
];

// Adds a custom marker for each lake on the map
lakes.forEach(lake => {
    const el = document.createElement('div');
    el.className = "marker " + lake.name;
    new mapboxgl.Marker(el)
        .setLngLat([lake.lng, lake.lat])
        .setPopup(new mapboxgl.Popup().setHTML(lake.popup))
        .addTo(map);
});

const riverLines = [
    // Starting point at Big Lake 
    [-83.51909881189316, 42.721293972977314], 
     // Big Lake to Pontiac Lake
    [-83.45103241607949, 42.664682472492984], 
    // Pontiac Lake to Oxbow Lake
    [-83.47983124810104, 42.645980588668685],
    // Oxbow Lake to Ceder Island Lake
    [-83.48099571145308, 42.63039758294164],
    // Cedar Island Lake to North Commerce Lake
    [-83.48986218111924, 42.58293304302951],
    // North Commerce Lake to South Commerce Lake
    [-83.49968514670081, 42.57435407009425],
    // South Commerce Lake to Proud Lake
    [-83.52097367057802, 42.56785846280867], 
    // Proud Lake to Hubbell Lake
    [-83.61555794821616, 42.58579168920394],
    // Hubbell Lake to Kent Lake
    [-83.64676344950117, 42.5289401382445],
    // Kent Lake to Base Line Lake
    [-83.8926796865478, 42.425370235294935], 
    // Base Line Lake to Barton Pond
    [-83.7584324082047, 42.31377611849595],
    // Barton Pond to Ford Lake
    [-83.60534047890552, 42.21892656979439],
    // Ford Lake to Belleville Lake
    [-83.49774610909319, 42.213428101123355],
]

// Runs on map load - adds the lines to the map
map.on('load', () => {
    map.addLayer({
        id: 'line',
        type: 'line',
        source: {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: riverLines
                }
            }
        },
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
