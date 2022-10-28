const express=require("express");
const router=express.Router();

const { getSales, newSale } = require("../controllers/salesController");

router.route('/sales').get(getSales);
router.route('/sales/nuevo').post(newSale);

module.exports = router