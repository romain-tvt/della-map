import React, { useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";

import { MAPBOX_TOKEN, referencePoint } from "../config";

import GeoMapMarker from "./GeoMapMarker";
import GeoMapPanel from "./GeoMapPanel";

export default function GeoMap({ data }) {
  const [ref, setRef] = useState(referencePoint);
  const [markers, setMarkers] = useState([]);
  const [company, setCompany] = useState(undefined);

  useEffect(() => {
    const parseData = () => {
      const list = data.map(val => ({
        ...val,
        lon: parseFloat(val.lon),
        lat: parseFloat(val.lat)
      }));
      setMarkers(list);
    };
    parseData();
  }, [data]);

  const onMarkerClick = param => {
    setCompany(param);
  };

  const onPanelClick = () => {
    setCompany(undefined);
  };

  return (
    <>
      {data && data.length > 0 && (
        <ReactMapGL
          className="geoMap"
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...ref.viewport}
          onViewportChange={viewport => setRef({ viewport })}
        >
          {markers.map((data, id) => (
            <GeoMapMarker key={id} data={data} onClick={onMarkerClick} />
          ))}
          {company && <GeoMapPanel company={company} onClick={onPanelClick} />}
        </ReactMapGL>
      )}
    </>
  );
}
