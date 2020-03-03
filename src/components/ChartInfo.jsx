import React from "react";
import { dispatcher } from "./../redux/actions/dispatchers";
import { connect } from "react-redux";
import { withStyles, IconButton, Paper } from "@material-ui/core";
import filterOptions from "./../helpers/filterOptions.js";
import deepCopy from "./../helpers/deepCopy";
import Delete from "@material-ui/icons/Delete";
import totalAmount from "./../helpers/totalAmount";

const styles = {
  itemBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "3px"
  },
  fixedWidthBig: {
    width: "70%"
  },
  fixedWidthSmall: {
    width: "15%"
  }
};

const ChartInfo = ({ chartBooks, addInfo, classes }) => {
  const deleteData = async id => {
    const filtered = filterOptions(chartBooks, "delete", id);
    const newFiltered = deepCopy(filtered);
    await addInfo(newFiltered);
  };

  return (
    <div>
      <div className={classes.itemBox}>
        <p className={classes.fixedWidthBig}>Title</p>
        <p className={classes.fixedWidthSmall}>Price</p>
        <p>Delete</p>
      </div>
      {chartBooks && chartBooks.length > 0 ? (
        <div>
          {chartBooks.map(e => (
            <Paper className={classes.itemBox}>
              <p className={classes.fixedWidthBig}>{e.title}</p>
              <p className={classes.fixedWidthSmall}>{e.price}</p>
              <IconButton onClick={() => deleteData(e._id)}>
                <Delete></Delete>
              </IconButton>
            </Paper>
          ))}
          <p>{`Total amount ${totalAmount(chartBooks)}`}</p>{" "}
        </div>
      ) : (
        <p>No items in chart</p>
      )}
    </div>
  );
};

const mapStateToProps = store => ({ chartBooks: store.info.chartBooks });

const mapDispatch = dispatcher(["addInfo"]);

export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(styles)(ChartInfo));
