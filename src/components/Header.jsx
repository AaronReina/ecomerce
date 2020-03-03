import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Colors from "./../constants/Colors";
import {
  Typography,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Badge
} from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  headerStyle: {
    backgroundColor: Colors.primary,
    height: "80px",
    justifyContent: "center"
  },
  icon: {
    color: "white"
  }
}));

const Header = ({ chartBooks }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.headerStyle} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Books Store
          </Typography>
          <Hidden smDown>
            <Link to="/checkOut">
              <IconButton>
                <ShoppingCart className={classes.icon} />
              </IconButton>
            </Link>
          </Hidden>

          <Hidden mdUp>
            <Link to="/checkOut">
              <Badge
                badgeContent={chartBooks ? chartBooks.length : null}
                color="secondary"
              >
                <IconButton>
                  <ShoppingCart className={classes.icon} />
                </IconButton>{" "}
              </Badge>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = store => ({ chartBooks: store.info.chartBooks });

export default connect(mapStateToProps)(Header);
