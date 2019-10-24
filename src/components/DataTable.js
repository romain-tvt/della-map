import React from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

export default function DataTable({ data, onSelectionChange }) {
  const classes = useStyles();

  const renderLink = rowData => {
    if (rowData.site.trim() !== "") {
      return (
        <Link href={rowData.site} target="_blank" rel="noopener">
          lien
        </Link>
      );
    }
  };

  const renderImg = rowData => {
    if (rowData.image.trim() !== "") {
      return (
        <Avatar
          alt={rowData.domaine}
          title={rowData.domaine}
          src={rowData.image}
          className={classes.bigAvatar}
        />
      );
    }
  };

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
            render: renderLink
          },
          {
            title: "Image",
            field: "image",
            render: renderImg
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
