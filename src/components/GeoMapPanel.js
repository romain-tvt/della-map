import React from "react";
import { Popup } from "react-map-gl";

import GeoMapPanelCard from './GeoMapPanelCard';

export default function GeoMapPanel({ company, onClick }) {
  return (
    <>
      {company && company.domaine && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={company.lon}
          latitude={company.lat}
          closeOnClick={false}
          onClose={onClick}
        >
          <GeoMapPanelCard company={company} />
        </Popup>
      )}
    </>
  );
}
