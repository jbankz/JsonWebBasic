require('dotenv').config();
require('express-async-errors');

import express from "express";
const app = express();

import mainRouter from './routes/main';
import notFoundMiddleware from './middleware/not-found';
import errorHandlerMiddleware  from './middleware/error-handler';
import logger from "./util/logger";
import { connectDB } from "./db/connect";


// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //   await connectDB(`${process.env.MONGO_URI}`);
    app.listen(port, () =>
      logger.info(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    logger.error(error);
  }
};

start();