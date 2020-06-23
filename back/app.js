const express = require("express");
const volleyball = require("volleyball");
const path = require("path");
const cookies = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require("dotenv").config();
const app = express();
const db = require("./config/db");
const port = process.env.PORT;
const router = require("./routes");

// req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// middlewere
app.use(volleyball);

app.use(express.static(__dirname + "/public"));

app.use(cookies());
app.use(session({
    secret:'lospibesJs',
    saveUninitialized:true,
    resave:true
}));

//router
app.use("/api", router);


app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.use((err , req, res, next) =>{
    res.status(500).json(err)
});

// conectando con la base de datos 
db.sync({force:false})
    .then(()=>{
        app.listen(port , ()=>{
            console.log(`Escuchando en el puerto ${port}`)
        })
    })
    .catch(console.log)

