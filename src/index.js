import maplibre from 'maplibre-gl'; 
import 'maplibre-gl/dist/maplibre-gl.css';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';
import { MaplibreLegendControl } from "@watergis/maplibre-gl-legend";
import '@watergis/maplibre-gl-legend/css/styles.css';
import { MaplibreExportControl}  from "@watergis/maplibre-gl-export";
import '@watergis/maplibre-gl-export/css/styles.css';
import axios from 'axios';
import config from './config'; 

(()=>{
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
    map.addControl(new MaplibreExportControl({Crosshair: true, PrintableArea: true}), 'top-right');
    map.addControl(new maplibregl.ScaleControl({maxWidth: 80, unit: 'metric'}), 'bottom-left');
    map.addControl(new maplibregl.AttributionControl({compact: true,customAttribution: config.attribution}), 'bottom-right');
    
    if (config.legend){
        const legendCtrl = new MaplibreLegendControl(config.legend.targets, config.legend.options);
        map.addControl(legendCtrl, 'bottom-left')
    }

})();