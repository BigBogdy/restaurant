import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapLocation = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.4457483,
    longitude: 30.5070967,
    zoom: 15,
  });

  return (
    <>
      <ReactMapGL
        style={{
          height: 665,
          width: 1360,
          borderRadius: 25,
        }}
        mapboxAccessToken="pk.eyJ1IjoiYm9nZHVuMTciLCJhIjoiY2w4NG5sdHUzMDFvZDQwbzdvZm1nMnRiYyJ9.07cbj43Gix79lTCsYyao5Q"
        mapStyle="mapbox://styles/bogdun17/cl84oavkn006v15lkrarksij4"
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
      >
        <Marker latitude={50.4457483} longitude={30.5070967}>
          <img style={{ marginLeft: 55 }} src="/images/Mark.svg" alt="mark" />
        </Marker>
      </ReactMapGL>
    </>
  );
};

export default MapLocation;
