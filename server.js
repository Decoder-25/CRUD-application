const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

//log requests
app.use(morgan("tiny"));

//parse request to body parser
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs")) // if the path is not in views folder in that case

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.listen (PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
})