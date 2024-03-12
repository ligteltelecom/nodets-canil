import express,{Request, Response} from 'express';
import patch from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRouter from '../src/routers/index';


dotenv.config();

const server = express();

server.use(mainRouter);

server.listen(process.env.PORT);