import React from 'react';
import { Map, TileLayer, GeoJSON} from 'react-leaflet';


function HeatMap(props) {
    const {data, style, onEachFeature} = props;
    return (
        <>
            <h3>Heat Map</h3> 
            <Map style={{ height: "480px", width: "50%" }}
                center={[37.8, -96]}
                zoom={4}
                dragging={false}
                zoomControl={false}
                doubleClickZoom={false} 
                closePopupOnClick={false} 
                dragging={false} 
                zoomSnap={false} 
                zoomDelta={false} 
                trackResize={false}
                touchZoom={false}
                scrollWheelZoom={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <GeoJSON
                    data={data}
                    style={style}
                    onEachFeature={onEachFeature}
                />
            </Map>
        </>
    )
}

export { HeatMap }