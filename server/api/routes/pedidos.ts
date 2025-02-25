module.exports = () => {
  const express = require("express");
  const router = express.Router();
  const controller = require("../controllers/pedidos")();

  router.get("/", controller.listOrders);

  router.get("/resumo", controller.calcMonthRange);

  return router;
};
