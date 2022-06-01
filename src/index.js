import maplibre from 'maplibre-gl'; 
import 'maplibre-gl/dist/maplibre-gl.css';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';
//import { MapboxStyleSwitcherControl } from "@watergis/mapbox-gl-style-switcher"; //no style-switcher for MapLibre
//import "@watergis/mapbox-gl-style-switcher/styles.css"
//mport MapboxPopupControl from '@watergis/mapbox-gl-popup'; //no popup for MapLibre
//import '@watergis/mapbox-gl-popup/css/styles.css';
//import MapboxPitchToggleControl from '@watergis/mapbox-gl-pitch-toggle-control';
//import '@watergis/mapbox-gl-pitch-toggle-control/css/styles.css';
//import MapboxAreaSwitcherControl from '@watergis/mapbox-gl-area-switcher';
//import '@watergis/mapbox-gl-area-switcher/css/styles.css';
import { MaplibreLegendControl } from "@watergis/maplibre-gl-legend";
import '@watergis/maplibre-gl-legend/css/styles.css';
import { MaplibreExportControl}  from "@watergis/maplibre-gl-export";
import '@watergis/maplibre-gl-export/css/styles.css';
import MaplibreElevationControl from "@watergis/maplibre-gl-elevation";
import '@watergis/maplibre-gl-elevation/css/styles.css';
//import '@watergis/mapbox-gl-valhalla/css/styles.css';
import axios from 'axios';
import config from './config'; //this is for the configuration. "config.js" will be prepared.

(()=>{
//    mapboxgl.accessToken = config.accessToken; //no need for our app.

    const map = new maplibregl.Map({
        container: 'map',
        style: config.styles[0].uri,
        center: config.center,
        zoom: config.zoom,
        hash:true,
        attributionControl: false,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.addControl(new maplibregl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}), 'top-right');
    //map.addControl(new MapboxPitchToggleControl({minpitchzoom: 19})); 
    //MapboxStyleSwitcherControl.DEFAULT_STYLE = config.styles[0].title;
    //map.addControl(new MapboxStyleSwitcherControl(config.styles), 'top-right');
    //map.addControl(new MapboxAreaSwitcherControl(config.areaSwitcher.areas), 'top-right');
    if (config.elevation){
        map.addControl(new MaplibreElevationControl(config.elevation.url, config.elevation.options), 'top-right');
    }
    map.addControl(new MaplibreExportControl({Crosshair: true, PrintableArea: true}), 'top-right');
    map.addControl(new maplibregl.ScaleControl({maxWidth: 80, unit: 'metric'}), 'bottom-left');
    map.addControl(new maplibregl.AttributionControl({compact: true,customAttribution: config.attribution}), 'bottom-right');
    //if (config.popup)map.addControl(new MapboxPopupControl(config.popup.target));
    
    if (config.legend){
        const legendCtrl = new MaplibreLegendControl(config.legend.targets, config.legend.options);
        map.addControl(legendCtrl, 'bottom-left')
    }

})();