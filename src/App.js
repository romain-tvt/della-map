import React from "react";

import { Container } from "@material-ui/core";

import useFetchData from "./hook/useFetchData";

import Header from "./components/Header";
import GeoMap from "./components/GeoMap";
import DataTable from "./components/DataTable";

import LOL from './components/LOL';

function App() {
  const [data] = useFetchData();

  return (
    <div className="App">
      <Container>
        <Header />
        {data.length > 0 && (
          <>
            <GeoMap data={data} />
            <DataTable data={data} />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
