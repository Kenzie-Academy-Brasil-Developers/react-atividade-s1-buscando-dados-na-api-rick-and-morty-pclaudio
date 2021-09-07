import { makeStyles, Grid } from "@material-ui/core";
import CharCard from "../CharCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Characters = ({ characterList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {characterList.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </Grid>
    </div>
  );
};

export default Characters;
