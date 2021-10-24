import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createSchool, updateSchool } from '../../actions/schools';

const Form = ( { currentId, setCurrentId }) => {
  const [schoolData, setSchoolData] = useState({ image: '', name: '', about: '', location: '', admission: '' });
  const school = useSelector((state) => currentId ? state.schools.find((p) => p._id == currentId) : null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (school) {
      setSchoolData(school);
    };
  }, [school])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createSchool(schoolData));
    }
    else {
      dispatch(updateSchool(currentId, schoolData));
    }
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Adding a School</Typography>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setSchoolData({...schoolData, image: base64 })}
          />
        </div>
        <TextField name="name" variant="outlined" label="Name:" fullWidth value={schoolData.name} onChange={(e) => setSchoolData({ ...schoolData, name: e.target.value })}/>
        <TextField name="about" variant="outlined" label="About:" fullWidth value={schoolData.about} onChange={(e) => setSchoolData({ ...schoolData, about: e.target.value })}/>
        <TextField name="location" variant="outlined" label="Location:" fullWidth value={schoolData.location} onChange={(e) => setSchoolData({ ...schoolData, location: e.target.value })}/>
        <TextField name="admission" variant="outlined" label="Admission:" fullWidth value={schoolData.admission} onChange={(e) => setSchoolData({ ...schoolData, admission: e.target.value })}/>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
      </form>

    </Paper>
  );
}

export default Form;