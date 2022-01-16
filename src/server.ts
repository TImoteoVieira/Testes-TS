import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

app.get("/route1", (req, res) => {
    return res.send("Testando Node + Type Script")
})

app.listen(3000, () => {
    console.log('Server up')
});