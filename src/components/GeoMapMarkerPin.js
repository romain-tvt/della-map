import React from "react";

import { ICON } from "../config";

export default function GeoMapMarkerPin({ size = 20, onClick }) {
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      style={ICON.style}
      onClick={onClick}
    >
      <path d={ICON.path} />
    </svg>
  );
}
