const express = require ('express');
const cors = require("cors");
const dotenv = require ('dotenv');
const visitorRoute = require ('./Route/VisitorRoute');

dotenv.config({path: './Config.env'});

require('./Database/DB');
const app = express();

app.use(cors());

app.use(express.json());

app.use(visitorRoute);

app.listen(4041);