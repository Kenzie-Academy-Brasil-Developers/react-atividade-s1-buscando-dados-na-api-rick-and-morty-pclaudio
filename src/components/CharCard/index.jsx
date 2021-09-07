import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    padding: 10,
    height: 200,
  },
  alive: {
    backgroundColor: "#2a9d8f",
  },
  unknown: {
    backgroundColor: "#cca43b",
  },
  dead: {
    backgroundColor: "#e64d48",
  },
  name: {
    fontWeight: 600,
    textAlign: "center",
    color: "white",
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
});

const setColors = (classes, status) => {
  if (status === "Alive") {
    return classes.alive;
  }

  if (status === "unknown") {
    return classes.unknown;
  }

  if (status === "Dead") {
    return classes.dead;
  }
};

const CharCard = ({ character: { image, name, status, species } }) => {
  const classes = useStyles();
  const cardStyle = clsx(classes.root, setColors(classes, status));

  return (
    <Grid item xs={12} sm={4} md={3} lg={2} xl={1}>
      <Card className={cardStyle}>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography className={classes.name} variant="h5" component="h2">
            {name}

            <Divider className={classes.divider} variant="middle" />

            {species}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CharCard;
