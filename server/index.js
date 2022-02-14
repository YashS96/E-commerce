import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

//Components
import Route from './routes/route.js'
import Connection from './connection/db.js'

const app = express();


dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


//Connection(username, password);

const port=4000;

app.listen(port,()=>console.log(`Server up and running! at port ${port}`))