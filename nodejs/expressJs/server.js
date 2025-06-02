import express from "express";

const app = express()

app.get("/health", (req,res) => {
    console.log(req.query); // here to have the log we need to pass a query in the url(at the end) eg: ?name=Rishav //[Object: null prototype] { name: 'rishav' }
    // // res.status(201).json({message: 'all good'})

    // res.send("Hey! I am healthy.")
})

app.post("/api/users",(req,res)=>{

})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`))