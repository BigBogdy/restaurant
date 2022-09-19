import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
const MapLocation = () => {
  const [viewport, setViewport] = useState({
    latitude: 55.760824,
    longitude: 37.230857,
    zoom: 15,
  });
  return (
    <>
      <ReactMapGL
        style={{
          height: 665,
          width: 1360,
          marginTop: -175,
          borderRadius: 25,
        }}
        mapboxAccessToken="pk.eyJ1IjoiYm9nZHVuMTciLCJhIjoiY2w4NG5sdHUzMDFvZDQwbzdvZm1nMnRiYyJ9.07cbj43Gix79lTCsYyao5Q"
        mapStyle="mapbox://styles/bogdun17/cl84oavkn006v15lkrarksij4"
        {...viewport}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        <Marker latitude={55.760824} longitude={37.230857}>
          <img style={{ marginLeft: 55 }} src="/images/Mark.svg" alt="mark" />
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default MapLocation;
