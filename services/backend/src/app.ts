import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser'

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

import emailController from './email'

const app = express();

var whitelist = ['https://jezzlucena.com', 'https://www.jezzlucena.com', 'http://localhost:8080']
var corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/contact', emailController.send);
app.listen(process.env.PORT || 5050);