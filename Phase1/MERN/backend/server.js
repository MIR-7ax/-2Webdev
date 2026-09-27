import express from "express";

const app = express()

app.get("/api/notes", (req, res) => {
    res.send("Server workin!");
});

app.listen(5001, () =>{
    console.log("Server running on PORT:5001");
});