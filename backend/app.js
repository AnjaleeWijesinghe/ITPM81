require ('dotenv').config()	

const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8080;

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
    });


const donorRouter = require("./routes/doner");
http://localhost:8080/donor

app.use('/doner', () => donorRouter);


//routes


//connect to mongodb & listen for requests
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to db');
    

        //listen for requests

        app.listen(process.env.PORT, () => {
            console.log("listening for requsets on port ",process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    }
    );

