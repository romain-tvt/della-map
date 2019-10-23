import React from "react";
import MaterialTable from "material-table";

export default function DataTable({ data, onSelectionChange }) {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={[
          { title: "Domaine", field: "domaine" },
          { title: "Vignoble", field: "vignoble" },
          { title: "Adresse", field: "adresse" },
          { title: "Longitude", field: "lon", type: "numeric" },
          { title: "Latitude", field: "lat", type: "numeric" },
          {
            title: "Site",
            field: "site",
            render: rowData => {
              if (rowData.site.trim() !== "") {
                return (
                  <a
                    href={rowData.site}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    lien
                  </a>
                );
              }
            }
          },
          {
            title: "Image",
            field: "image",
            render: rowData => {
              if (rowData.image.trim() !== "") {
                return (
                  <img src={rowData.image} alt="img" width="20" height="20" />
                );
              }
            }
          }
        ]}
        options={{
          selection: true
        }}
        onSelectionChange={onSelectionChange}
        data={data}
        title="Liste des vignobles"
      />
    </div>
  );
}
