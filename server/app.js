import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import { users } from './models/userSchema.js';
import {connectDatabase} from './Db/conn.js';
import cors from 'cors'
import { router } from './routes/router.js';
const app = express();

connectDatabase();

dotenv.config();

const port = 4000;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`server us runing on port number ${port}`);
})