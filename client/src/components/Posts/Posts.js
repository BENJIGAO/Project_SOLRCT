import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import Post from './Post/Post';
import useStyles from './styles';


import { useSelector } from 'react-redux';

const Posts = ( { setCurrentId }) => {
  const schools = useSelector((state) => state.schools);
  const classes = useStyles();

  return (
    !schools.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {schools.map((school) => (
          <Grid key={school._id} item xs={12} sm={6}>
            <Post school={school} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
    
  
  );
}

export default Posts;