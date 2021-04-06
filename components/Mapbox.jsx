import ReactMapGL from 'react-map-gl';

const Mapbox = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 5.55472,
    longitude: -0.22097,
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
