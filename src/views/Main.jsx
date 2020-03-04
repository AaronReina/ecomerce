import React, { useEffect, useState } from "react";
import { dispatcher } from "./../redux/actions/dispatchers";
import { connect } from "react-redux";
import { getBooks } from "./../axios/calls";
import withDataFetch from "./../HOCComponents/withDataFetch";
import Colors from "./../constants/Colors";
import deepCopy from "./../helpers/deepCopy";
import {
  withStyles,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Hidden,
  IconButton,
  Paper,
  Badge
} from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import { Link } from "react-router-dom";
import BookCard from "./../components/BookCard";
import filterOptions from "./../helpers/filterOptions.js";
import ChartInfo from "./../components/ChartInfo";

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
  },
  absoluteButton: {
    position: "fixed",
    zIndex: "1",
    top: "200px",
    right: "200px",
    backgroundColor: Colors.primary,
    borderRadius: "50%"
  },
  absoluteChart: {
    position: "fixed",
    zIndex: "1",
    top: "200px",
    right: "260px",
    width: "600px",
    height: "350px",
    overflow: "scroll",
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "3%",
    scrollY: "auto"
  },
  icon: {
    margin: "5px",
    color: "white"
  },
  rowInfo: {
    display: "flex",
    justifyContent: "center"
  }
};

const Main = ({ classes, data, addInfo, chartBooks }) => {
  const [books, setBooks] = useState([]);
  const [select, setSelect] = useState("cheapFirst");
  const [text, setText] = useState("");
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    data && setBooks(filterOptions(data, "cheapFirst"));
    console.log(data);
  }, [data]);

  const handleChange = async (option, info) => {
    option === "category" ? await setText(info) : await setSelect(option);
    const filtered = filterOptions(data, option, info);
    const newFiltered = deepCopy(filtered);
    await setBooks(newFiltered);
  };

  const addToChart = async data => {
    const toChart = chartBooks ? [...chartBooks, data] : [data];
    await addInfo(toChart);
  };

  return (
    <div className={classes.container}>
      {books && (
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
              value={select}
            >
              <MenuItem value={"oldFirst"}>Old ones first</MenuItem>
              <MenuItem value={"oldLast"}>Old ones last</MenuItem>
              <MenuItem value={"cheapFirst"}>Cheaper first</MenuItem>
              <MenuItem value={"cheapLast"}>Cheaper last</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              value={text}
              id="categorySearch"
              label="Category"
              onChange={e => handleChange("category", e.target.value)}
            />
          </FormControl>
        </div>
      )}
      <div className={classes.box}>
        {books &&
          books.map((e, index) => (
            <BookCard key={index} addToChart={addToChart} data={e} />
          ))}
      </div>

      {chartBooks && (
        <Hidden smDown>
          <div className={classes.absoluteButton}>
            <IconButton onClick={() => setShowCart(!showCart)}>
              <Badge badgeContent={chartBooks.length} color="secondary">
                <PlaylistAddCheckIcon className={classes.icon} />
              </Badge>
            </IconButton>
          </div>
        </Hidden>
      )}
      {showCart && (
        <Hidden smDown>
          <Paper className={classes.absoluteChart}>
            <ChartInfo />
            {chartBooks && chartBooks.length > 0 && (
              <div className={classes.rowInfo}>
                <p>go to checkOut</p>
                <Link to="/checkOut">
                  <IconButton>
                    <ShoppingCart />
                  </IconButton>
                </Link>
              </div>
            )}
          </Paper>
        </Hidden>
      )}
    </div>
  );
};
const mapStateToProps = store => ({ chartBooks: store.info.chartBooks });

const mapDispatch = dispatcher(["addInfo"]);

export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(styles)(withDataFetch(getBooks, Main)));
