import express from "express";
import { PORT } from "./config.js";
import { MONGO_DB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();
app.use(express.json())

//handle requests CORS policy
// Option.1
// app.use(cors())
// option2
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}))


app.use('/api/v1', booksRoute)



app.get("/", (req, res) => {
  res.status(200).send("hello worlds!");
});



//db connection
;(() => {
  mongoose
    .connect(MONGO_DB_URL)
    .then(() => {
      console.log("CONNECTED:: SUCCESS;;");
      app.listen(process.env.PORT, () => {
        console.log(`App is listing to port ${PORT}`);
      });
    })
    .catch((err) => {
      console.log("Error while connecting to DB::", err);
    });
})();
