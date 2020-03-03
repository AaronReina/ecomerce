import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20
  }
});

export default ({ data, addToChart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Book"
          height="140"
          image={data.img}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
          <Typography gutterBottom variant="body1" component="h4">
            {`Category ${data.category}`}
          </Typography>
          <Typography gutterBottom variant="body1" component="h4">
            {`Writed by ${data.author} in ${data.year}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {`Price ${data.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => addToChart(data)} size="small" color="primary">
          Add to chart{" "}
        </Button>
      </CardActions>
    </Card>
  );
};
