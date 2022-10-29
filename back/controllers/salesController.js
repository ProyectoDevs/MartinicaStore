const saleSchema = require('../models/sales');


exports.getSales=async(req,res,next) => {
    const sales = await saleSchema.find();
    if (!sales) {
        return res.status(404).json({
            success:false,
            error:true
        })
    }
    res.status(200).json({
        success:true,
        count: sales.length,
        sales
    })
}

exports.newSale =async(req,res,next) => {
    const sale = await saleSchema.create(req.body);

    res.status(201).json({
        success:true,
        sale
    })
}
