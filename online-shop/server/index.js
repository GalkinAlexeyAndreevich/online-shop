import express from "express"
import "dotenv/config"
import * as sequelize from "./db.js"
const PORT = process.env.PORT || 5500

const app = express()

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>{
            console.log(`server started on port ${PORT} `);
        })
    }catch(e){
        console.log(e);
    }
}

