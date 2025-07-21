const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");
const {PORT} = require("./config/serverConfig");
const errorHandler = require("./middlewares/errorHandler");

const setupAndStartServer = async()=>{ 
    const app = express();

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use("/api",ApiRoutes);

    // Global error handler — must be last
    app.use(errorHandler);

    app.listen(PORT,async(err)=>{
        if(err) {
            console.log("Error occured while setup the server");
            console.error("Server connection Error", err.message);
        }
        console.log("Server running on PORT: ",PORT);
    })
}

setupAndStartServer();