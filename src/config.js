const version = 0.1;

module.exports = {
    //accessToken : process.env.ACCESSTOKEN,
    // change attribution to yours
    attribution : 'test map',
    // change stylefiles URLs to yours
    styles : [
        { title: 'UN Vector Tile', uri: `https://narwassco.github.io/mapbox-stylefiles/unvt/style.json?version=${version}`,},
    //    { title: 'Street', uri: `https://narwassco.github.io/mapbox-stylefiles/street/style.json?version=${version}`,}, 
    //    { title: 'Satellite', uri: `https://narwassco.github.io/mapbox-stylefiles/satellite/style.json?version=${version}`,},
    ],
    // change initial location and zoom level to yours
    center: [0, 0],
    zoom: 1,
    // you can put your geojson file for searching functions
    search:{
        url: 'https://narwassco.github.io/vt/meter.geojson',
        target: ['connno', 'serialno'],
        format: (p) => {return `${p.customer}, ${p.connno}, ${p.serialno}, ${p.village}`},
        place_type: ['meter'],
        placeholder: 'Search CONN NO or S/N',
        zoom: 17,
    },
    // please specify layer name for showing in legend panel.
    legend:{
        targets:{
            'pg-landcover-20': 'Forest',
            'pg-landcover-30': 'Grass',
            'pg-landcover-40': 'Land Cover'
        },
        options: {
            showDefault:false,
            showCheckbox:true,
            reverseOrder:true,
            onlyRendered:true
        }
    }
}
