import express from 'express'
import cors from "cors";
import apiRoute from './routes/index.js';
import { PORT } from './config/serverConfig.js';
import morgan from 'morgan';



const app = express();


app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/api', apiRoute);
app.use('/ping', (req, res)=>{
    return res.json({
        message : "pong"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running on the port ${PORT}`);
})