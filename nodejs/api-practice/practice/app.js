const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")


const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/sample", async(req,res)=> {
    try{

        const apires = await fetch("url")
        const data = await apires.json()
        res.send(data)

    }catch (err){
        throw new Error("ERROR : "+ err.message)
    }
})
 
api.listen(PORT,()=>{
    console.log(`server running at PORT : ${PORT}`);
    
})