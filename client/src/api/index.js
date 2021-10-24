import axios from 'axios';

const url = 'http://localhost:5000/schools';

export const fetchSchools = () => axios.get(url);
export const createSchool = (newSchool) => axios.post(url, newSchool);
export const updateSchool = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);