// Express router for sales map endpoint
const router = require("express").Router();
const salesMapRoute = require("../controllers/salesMapController");

router.get("/sales_map", salesMapRoute.getSalesMap);

module.exports = router;
