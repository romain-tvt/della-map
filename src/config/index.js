export const MAPBOX_TOKEN =
  "pk.eyJ1Ijoicm9tYWludHZ0IiwiYSI6ImNrMjMzejR5NjAwZHkzbnA5MjFzd3pybTQifQ.Trsof6wgCsc3gFT--_S3Hg";

export const referencePoint = {
  viewport: {
    width: "100%",
    height: 600,
    latitude: 46.74644,
    longitude: 2.56962,
    zoom: 5
  }
};

export const ICON = {
  path: `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`,
  style: {
    fill: "#7ac1ff",
    stroke: "none",
    cursor: "pointer"
  }
};

export const geocodingURL = (address = '') => {
  if (address !== '') {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?country=FR&access_token=${MAPBOX_TOKEN}`;
  }
  return '';
}