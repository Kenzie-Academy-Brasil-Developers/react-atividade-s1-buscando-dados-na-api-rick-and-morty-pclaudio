import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 30,
    marginBottom: 30,
  },
  appBar: {
    backgroundColor: "inherit",
    boxShadow: "none",
  },
  toolBar: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 29,
    [theme.breakpoints.up("sm")]: {
      width: "unset",
      textAlign: "unset",
      fontSize: 40,
    },
  },
  navigation: {
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Navigation = ({
  currentPage,
  numberOfPages,
  handleNextPage,
  handlePreviousPage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title}>Meus personagens</Typography>

          <div className={classes.navigation}>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="back"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ArrowBackIos fontSize="large" />
            </IconButton>

            <Typography variant="h4" className={classes.title}>
              {currentPage} / {numberOfPages}
            </Typography>

            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="forward"
              onClick={handleNextPage}
              disabled={currentPage === numberOfPages}
            >
              <ArrowForwardIos fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
