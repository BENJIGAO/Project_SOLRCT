import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles'

const Post = ( { school, setCurrentId }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={school.image} title="bruh" />
      <div className={classes.overlay}>
        <Typography variant="h6">{school.name}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size="small" onClick={() => setCurrentId(school._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h6" component="h2">{school.location}</Typography>
      <div className={classes.details}>
        <Typography className={classes.wrap} variant="body2" color="textSecondary" component="h2">{school.about}</Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{school.location}</Typography>
      </CardContent>
    </Card>
  );
}

export default Post;