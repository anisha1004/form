import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import UploadButtons from './UploadButton';

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    width: 250,
    height: 250,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          
        </CardContent>
      </CardActionArea>

      <CardActions>
        <UploadButtons />
        <Button>Remove</Button> 
      </CardActions>

    </Card>
  );
}