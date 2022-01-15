import express from "express";

const app = express();

/*
 ====== Verbos http =====
get    -> buscar dado
post   -> inserir/criar dado
put    -> alterar dado
delete -> deletar dado
patch  -> alterar um dado específico
*/

app.get("/route1", (req, res) => {
    return res.send("Testando Node + Type Script")
})

app.listen(3000, () => {
    console.log('Server up')
});