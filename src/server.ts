import express from 'express';
import patch from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import mainRouter from '../src/routers/index';

dotenv.config();

const server = express();
server.set('view engine', 'mustache');
server.set('views', patch.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(patch.join(__dirname, '../public')));

server.use(mainRouter);
server.use((req, res) => {
    res.render('pages/404');
});

server.listen(process.env.PORT);