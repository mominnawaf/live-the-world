import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl } from "react-map-gl";
function MapBox({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) {
  return (
    <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 10,
      }}
      mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
      style={{borderRadius:15, height: 500 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <NavigationControl />
      <Marker longitude={longitude} latitude={latitude} anchor="bottom" />
    </Map>
  );
}

export default MapBox;
