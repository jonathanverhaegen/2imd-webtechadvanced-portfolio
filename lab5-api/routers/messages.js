const express = require("express");
const router = express.Router();
const controllerMessage = require("../controllers/message");

router.post('/', controllerMessage.store);

router.get("/:id", controllerMessage.getOne);



module.exports = router;