import React from 'react';
import ReactMapGL from 'react-map-gl';

const Mapbox = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 53.143871,
    longitude: -1.19911,
    zoom: 8,
    width: '100vw',
    height: '60vh',
  });
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default Mapbox;
