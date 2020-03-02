import React, { useEffect, useState } from "react";
import { getBooks } from "./../axios/calls";
import withDataFetch from "./../HOCComponents/withDataFetch";
import {
  withStyles,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@material-ui/core";
import BookCard from "./../components/BookCard";
import { dispatcher } from "./../redux/actions/dispatchers";
import { connect } from "react-redux";
import filterOptions from "./../helpers/filterOptions.js";

const styles = {
  container: {
    padding: "2%"
  },
  box: {
    display: "flex",
    alignItems: "space-around",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  filterBox: {
    margin: "2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
};

const Main = ({ classes, data, addInfo, chartBooks }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => setBooks(data), [data]);

  const handleChange = async (option, info) => {
    const filtered = filterOptions(data, option, info);
    const newFiltered = JSON.parse(JSON.stringify(filtered));
    await setBooks(newFiltered);
  };

  const addToChart = async data => {
    const toChart = chartBooks ? [...chartBooks, data] : [data];
    await addInfo(toChart);
  };

  return (
    <div className={classes.container}>
      <div className={classes.filterBox}>
        <Typography gutterBottom variant="body1" component="p">
          Select your filter or type your category{" "}
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Sort Types</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={e => handleChange(e.target.value)}
          >
            <MenuItem value={"oldFirst"}>Old ones first</MenuItem>
            <MenuItem value={"oldLast"}>Old ones last</MenuItem>
            <MenuItem value={"cheapFirst"}>Cheaper first</MenuItem>
            <MenuItem value={"cheapLast"}>Cheaper last</MenuItem>
          </Select>
          <TextField
            id="categorySearch"
            label="Category"
            onChange={e => handleChange("category", e.target.value)}
          />
        </FormControl>
      </div>
      <div className={classes.box}>
        {books &&
          books.map((e, index) => (
            <BookCard key={index} addToChart={addToChart} data={e} />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = store => ({ chartBooks: store.info.chartBooks });

const mapDispatch = dispatcher(["addInfo"]);

export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(styles)(withDataFetch(getBooks, Main)));
