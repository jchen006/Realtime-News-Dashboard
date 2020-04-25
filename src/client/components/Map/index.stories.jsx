import React from 'react';
import { WorldMap } from './index';
import { HeatMap } from './HeatMap';
import { statesData } from './mock/usStatesData'

export default { title: 'World Map' };


export const WorldMapExample = () => {
    const props = {
        latitude: -0.09,
        longitude: 51.505,
        data: {
            city: [
                { "name": "Tokyo", "coordinates": [139.6917, 35.6895], "population": 37843000 },
                { "name": "Jakarta", "coordinates": [106.8650, -6.1751], "population": 30539000 },
                { "name": "Delhi", "coordinates": [77.1025, 28.7041], "population": 24998000 },
                { "name": "Seoul", "coordinates": [126.9780, 37.5665], "population": 23480000 },
                { "name": "Shanghai", "coordinates": [121.4737, 31.2304], "population": 23416000 },
                { "name": "Karachi", "coordinates": [67.0099, 24.8615], "population": 22123000 },
                { "name": "Beijing", "coordinates": [116.4074, 39.9042], "population": 21009000 },
                { "name": "Mumbai", "coordinates": [72.8777, 19.0760], "population": 17712000 },
                { "name": "Osaka", "coordinates": [135.5022, 34.6937], "population": 17444000 },
                { "name": "Moscow", "coordinates": [37.6173, 55.7558], "population": 16170000 },
                { "name": "Dhaka", "coordinates": [90.4125, 23.8103], "population": 15669000 },
                { "name": "Bangkok", "coordinates": [100.5018, 13.7563], "population": 14998000 },
                { "name": "Kolkata", "coordinates": [88.3639, 22.5726], "population": 14667000 },
                { "name": "Istanbul", "coordinates": [28.9784, 41.0082], "population": 13287000 },
            ],
            minLat: -6.1751,
            maxLat: 55.7558,
            minLong: 37.6173,
            maxLong: 139.6917
        }
    }
    return (
        <WorldMap {...props}/>
    )
}

export const HeatMapExample = () => {
    
    const getColor = (d) => {
        return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    return (
        <HeatMap style={style} data={statesData}/>
    )

}