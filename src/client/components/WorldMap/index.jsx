import React from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import Typography from "@material-ui/core/Typography";

function WorldMap(props) {
  const { latitude, longitude, data, title } = props;
  const { minLat, maxLat, minLong, maxLong } = data;
  var centerLat = (data.minLat + data.maxLat) / 2;
  var distanceLat = data.maxLat - data.minLat;
  var bufferLat = distanceLat * 0.05;
  var centerLong = (data.minLong + data.maxLong) / 2;
  var distanceLong = data.maxLong - data.minLong;
  var bufferLong = distanceLong * 0.15;
  return (
    <>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <Map
        style={{ height: "480px" }}
        zoom={1}
        center={[centerLat, centerLong]}
        bounds={[
          [data.minLat - bufferLat, data.minLong - bufferLong],
          [data.maxLat + bufferLat, data.maxLong + bufferLong],
        ]}
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
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.city.map((city, k) => {
          return (
            <CircleMarker
              key={k}
              center={[city["coordinates"][1], city["coordinates"][0]]}
              radius={20 * Math.log(city["population"] / 10000000)}
              fillOpacity={0.5}
              stroke={false}
            >
              <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                <span>
                  {city["name"] +
                    ": " +
                    "Population" +
                    " " +
                    city["population"]}
                </span>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </Map>
    </>
  );
}

export default WorldMap;
