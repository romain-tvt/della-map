import React from "react";
import { Marker } from "react-map-gl";

import GeoMapMarkerPin from "./GeoMapMarkerPin";

export default function GeoMapMarker({ data, onClick }) {
  return (
    <Marker
      longitude={data.lon}
      latitude={data.lat}
      offsetTop={-20}
      offsetLeft={-10}
    >
      <GeoMapMarkerPin size={data.size} onClick={onClick.bind(null, data)} />
    </Marker>
  )
}
