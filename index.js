import express from "express";
import cors from "cors"
import { getAllDoc , postDoc, findDoc, deleteDoc} from "./src/functions.js";

const app = express();
app.use (express.json());
app.use ( cors() );

const PORT = process.env.PORT;

//get: Root
app.get("/", (req, res) =>{
    res.send `Mongo API: I am root`
})

// Get: get all
app.get("/getall",getAllDoc)

//Get : Search
app.get("/search/:search", findDoc)

//post : Add 
app.post("/post", postDoc)

//delete
app.delete("/delete/:docId", deleteDoc);

app.listen(PORT, ()=>
    console.log(`Listening on http://localhost:${PORT}`))