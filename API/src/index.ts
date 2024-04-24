import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoose  from 'mongoose';

import router from './router';

const app = express();
app.use(cors({
    credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080/');
});

const MONGO_URL='mongodb+srv://fpiscani:skqB5YD9OfXdYj1C@cluster0.2h48tvc.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());