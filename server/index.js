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
import Product from './models/product.js';
import ProductStat from './models/productStat.js';
import Transaction from './models/transaction.js';
import OverallStat from './models/overallStat.js';
import AffiliateStat from "./models/affiliateStat.js";

import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from "./data/index.js";


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
const PORT = process.env.PORT || 9000;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, // Allow us to keep urlencoded set to false
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => console.log(`SERVER is listening on ${PORT}`));


    // DO THE FOLLOWING ONLY ONCE TO AVOID DUPLICATES
    /* Mock User DATA */
    // User.insertMany(dataUser); //INSERT Mocks USERS in Mongoose-Atlas

   /* Mock Products & ProductStats DATA */
   // Product.insertMany(dataProduct); //INSERT Mocks PRODUCT
   // ProductStat.insertMany(dataProductStat); //INSERT Mocks PRODUCT

   /* Mock Transactions DATA */
   // Transaction.insertMany(dataTransaction); //INSERT Mocks

   /* Mock Stats DATA */
   // OverallStat.insertMany(dataOverallStat); //INSERT Mocks

   /* Mock AffiliateStats DATA */
   // AffiliateStat.insertMany(dataAffiliateStat); //INSERT Mocks
})
.catch((err) => console.log(`${err} did not connect`));