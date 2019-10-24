import axios from "axios";

import { geocodingURL } from "../config";

export const csvJSON = (csv = "") => {
  const lines = csv.split("\n");
  if (lines.length > 0) {
    const keys = lines
      .shift()
      .split(",")
      .map(val => val.trim().toLowerCase());
    const json = lines.map(values => {
      const valuesList = values.split(",");
      return valuesList.reduce((acc, curr, id) => {
        return { ...acc, [keys[id]]: curr };
      }, []);
    });
    return json;
  }
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
