import express from "express";

const app = express();

app.get("/route1", (req, res) => {
    return res.send("Testando Node + Type Script")
})

app.listen(3000, () => {
    console.log('Server up')
});


/*
 ====== Verbos http =====
get    -> buscar dado
post   -> inserir/criar dado
put    -> alterar dado
delete -> deletar dado
patch  -> alterar um dado específico
*/

/*
===== Tipos de parâmetros =======
Routes Params -> http://xxx1411441342134
Query Params  -> http://xxx?name=teclado
Body Params   -> {
                    "name":"teclado"
                 } 
*/