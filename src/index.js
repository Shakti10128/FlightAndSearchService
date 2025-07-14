const express = require("express");
const {PORT} = require("./configs/serverConfig");

const setupAndStartServer = async()=>{
    const app = express();

    app.listen(PORT,(err)=>{
        if(err) {
            console.log("Error occured while setup the server");
            console.error("Server connection Error", err.message);
        }
        console.log("Server running on PORT: ",PORT);
    })
}

setupAndStartServer();