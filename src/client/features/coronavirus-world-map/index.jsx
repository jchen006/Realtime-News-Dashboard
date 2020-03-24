import React from 'react';
import { WorldMap } from 'components/WorldMap';

function CoronavirusWorldMap() {
    const cities = [
        { name: "Tokyo",          coordinates: [139.6917,35.6895],  population: 37843000 },
        { name: "Jakarta",        coordinates: [106.8650,-6.1751],  population: 30539000 },
        { name: "Delhi",          coordinates: [77.1025,28.7041],   population: 24998000 },
        { name: "Manila",         coordinates: [120.9842,14.5995],  population: 24123000 },
        { name: "Seoul",          coordinates: [126.9780,37.5665],  population: 23480000 }
    ];

    return (
        <>
            <WorldMap cities={cities}/>
        </>
    )
}

export { CoronavirusWorldMap };