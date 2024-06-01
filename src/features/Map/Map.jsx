import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import SetMapView from "./SetMapView";
import SearchBar from "../../ui/SearchBar";
import Button from "../../ui/Button";
import { useMyPosition } from "../../hooks/getCurrenPosition";
import Filter from "../../ui/Filter";
import { useSelector } from "react-redux";

const MapCon = styled.div`
  height: 100%;
  width: 100vw;
  position: relative;
`;
const SearchStyle = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 75vw;
`;
const ButtonStyle = styled.div`
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  /* width: 75vw; */
`;
const Filters = styled.div`
  position: fixed;
  top: 23%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 75vw;
  overflow-x: scroll;
  backdrop-filter: blur(5px);
  & {
    ::-webkit-scrollbar-thumb {
      background-color: none;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
`;

const markers = [
  {
    position: [5.3927, 6.9861],
    id: 1,
    description: "futo hostel",
  },
  {
    position: [-30.4, 20],
    id: 2,
    description: "san francisco",
  },
  {
    position: [51, 45.5],
    id: 3,
    description: "bank of span",
  },
  {
    position: [9, 49.18],
    id: 4,
    description: "eko atlantics",
  },
];
function Map() {
  const [position, setPosition] = useState([5.375615, 6.9943636]);
  const { position: geoPosition, getPosition } = useMyPosition();
  const { filter } = useSelector((state) => state.mapData);
  useEffect(() => {
    if (geoPosition) setPosition(() => geoPosition);
  }, [geoPosition]);
  return (
    <MapCon>
      <SearchStyle>
        <SearchBar />
      </SearchStyle>
      {filter && (
        <Filters>
          <Filter />
        </Filters>
      )}
      {!geoPosition && (
        <ButtonStyle onClick={() => getPosition()}>
          <Button type="map">My Position</Button>
        </ButtonStyle>
      )}
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="mapStyle"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {markers.map((data) => (
          <Marker position={data.position} key={data.id}>
            <Popup>{data.description}</Popup>
          </Marker>
        ))}
        {geoPosition && (
          <Marker position={geoPosition}>
            <Popup>my position</Popup>
          </Marker>
        )}
        <SetMapView position={position} />
      </MapContainer>
    </MapCon>
  );
}

export default Map;
