const version = 0.1;

module.exports = {
    attribution : 'test map',
    // change stylefiles URLs to yours
    styles : [
        { title: 'Vector Tile Map 1', uri: `https://ubukawa.github.io/vt-test/maps/test-simple.json?version=${version}`,},
    //    { title: 'GSI Map', uri: `https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json?version=${version}`,}, 
    ],
    // change initial location and zoom level to yours
    center: [0, 0],
    zoom: 1,
    // please specify layer name for showing in legend panel.
    legend:{
        targets:{
            'landmass': 'landmass',
            'popp': 'popp',
            'bndl': 'bndl'
        },
        options: {
            showDefault:false,
            showCheckbox:true,
            reverseOrder:true,
            onlyRendered:true
        }
    }
}
