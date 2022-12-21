import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

/* DATA IMPORT */
import User from "./models/user.js";
import { dataUser } from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();

app.use(express.json());

app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan('common'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false }));

app.use(cors());

/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, // Allow us to keep urlencoded set to false
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => console.log(`SERVER is listening on ${PORT}`));

    /* Mock User DATA */
    User. insertMany(dataUser);
})
.catch((err) => console.log(`${err} did not connect`));