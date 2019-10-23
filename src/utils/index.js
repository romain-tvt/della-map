import axios from "axios";

import { geocodingURL } from "../config";

export const csvJSON = (csv = "") => {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",").map(val => val.trim().toLowerCase());

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }
  return result;
};

/*
Utilisation d'une fonction récursive pour charger les lon et lat des données non geolocalisées
Le BATCH n'est pas authorisé avec le compte
{
    "message": "Permanent geocodes are not enabled for this account. Contact sales@mapbox.com to enable this feature."
}
*/
export const mapBoxGeocoding = async (list = []) => {
  const load = async (list, id) => {
    const obj = list[id];
    if (obj.lat === "" || obj.lon === "") {
      const { data } = await axios.get(geocodingURL(obj.adresse));
      obj.lon = data.features[0].center[0];
      obj.lat = data.features[0].center[1];
    }
    list[id] = obj;
    if (id < list.length - 1) {
      await load(list, id + 1);
    }
  };
  await load(list, 0);
  return list;
};


