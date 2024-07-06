import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import {dbConnection} from "../backend/Connection/dbConnection.js";
import UserRouter from"./Router/UserRouter.js"
import JobRouter from "./Router/JobRouter.js";
import ApplicationRouter from "./Router/ApplicationRouter.js";
import { errorMiddleware } from "./middleware/error.js";
import path from 'path';


const app=express();

dotenv.config({path:"./config/config.env"});
app.use(cors({
    origin:true,
    methods:["PUT","GET","POST","DELETE"],
    credentials:true,

}));



app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));
app.use(fileUpload( {
        useTempFiles:true,
        tempFileDir:"/tmp/"
    
}));

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/job",JobRouter);
app.use("/api/v1/application",ApplicationRouter);




app.get("/hi", (req, res )=>{
  res.json({message : "hi route"});
})

app.use(errorMiddleware);
dbConnection();

export default app;