import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  }
});

export default function GeoMapPanel({ company }) {
  const classes = useStyles();

  return (
    <>
      {company && company.domaine && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {company.domaine}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {company.vignoble}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}
