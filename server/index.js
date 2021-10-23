import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postSchools from './routes/schools.js';

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/schools', postSchools);

const CONNECTION_URL = "mongodb+srv://Brian-Gao-Admin:Zhao2713199@cluster0.wstop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));