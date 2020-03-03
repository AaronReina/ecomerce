import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChartInfo from "./../components/ChartInfo";
import Colors from "../constants/Colors";

const styles = {
  container: {
    padding: "0 10%"
  },
  button: {
    color: "white",
    padding: "10px",
    backgroundColor: Colors.primary,
    borderRadius: "10px",
    textDecoration: "none",
    margin: "10px"
  },
  buttonBox: {
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
};

const CheckOut = ({ classes, chartBooks }) => {
  return (
    <div className={classes.container}>
      <ChartInfo />
      <div className={classes.buttonBox}>
        <Link className={classes.button} to="/">
          back to store{" "}
        </Link>
        {chartBooks && chartBooks.length > 0 && (
          <Link className={classes.button} to="/fin">
            go to payment{" "}
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = store => ({ chartBooks: store.info.chartBooks });

export default connect(mapStateToProps)(withStyles(styles)(CheckOut));
