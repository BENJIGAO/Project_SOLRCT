import * as api from '../api';

// Action Creators
export const getSchools = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSchools();
    
    dispatch({ type: 'FETCH_ALL', payload: data });
  }
  catch (error) {
    console.log(error.message);

  }
  const action = { type: 'FETCH_ALL'}
}

export const createSchool = (school) => async (dispatch) => {
  console.log("trying to add new school");
  try {
    const { data } = await api.createSchool(school);

    dispatch({ type: 'CREATE', payload: data})
  }
  catch (error) {
    console.log(error);
  }
}

export const updateSchool = (id, school) => async (dispatch) => {
  try {
    const { data } = await api.updateSchool(id, school);

    dispatch({ type: 'UPDATE', payload: data })

  }
  catch (error){
    console.log(error.message);

  }
}