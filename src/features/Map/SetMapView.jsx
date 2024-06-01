import { useMap } from "react-leaflet";

function SetMapView({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default SetMapView;
