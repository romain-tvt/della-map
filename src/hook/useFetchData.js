import { useEffect, useState } from "react";
import axios from "axios";

import { csvJSON, mapBoxGeocoding } from "../utils";

export default function useFetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const importCSV = async () => {
      const csv = await axios.get("./assets/vignerons.csv");
      const json = csvJSON(csv.data);
      const loadedData = await mapBoxGeocoding(json);
      setData(loadedData);
    };
    importCSV();
  }, []);
  return [data];
}
