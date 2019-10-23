import React, { useState } from "react";

import { Container } from "@material-ui/core";

import useFetchData from "./hook/useFetchData";

import Header from "./components/Header";
import GeoMap from "./components/GeoMap";
import DataTable from "./components/DataTable";

function App() {
  const [data] = useFetchData();
  const [companies, setCompanies] = useState(undefined);

  const onSelectionChange = rows => {
    setCompanies(rows.length > 0 ? rows : data);
  };

  return (
    <div className="App">
      <Container>
        <Header />
        {data.length > 0 && (
          <>
            <GeoMap data={companies || data} />
            <DataTable data={data} onSelectionChange={onSelectionChange} />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
