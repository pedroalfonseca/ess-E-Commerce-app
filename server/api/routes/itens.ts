module.exports = () => {
    const express = require("express");
    const router = express.Router();
    const controller = require("../controllers/itens")();

    //retorna todos os itens do user
    router.get("/user", controller.getAllItensUser);
 
    //retorna apenas um item
    router.get("/:id", controller.listProducts);

    //retorna todos os itens
    router.get("/", controller.getAllItens);

    //cria, atualiza e deleta item
    router.post("/", controller.createItem);
    router.put("/:id", controller.editItem);
    router.delete("/:id", controller.deleteItem);

    return router;
  };