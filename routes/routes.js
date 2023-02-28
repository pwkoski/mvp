const express = require("express");
const router = express.Router();
const controller = require("../controller/controller.js");

//MIDDLEWARE:
router.use(express.json());

//ROUTES:

router.get("/", controller.getNode);

module.exports = router;