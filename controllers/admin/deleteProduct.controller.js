const { loadData, saveData } = require("../../data")
module.exports=(req,res)=>{
    const {id} = req.params
    const products = loadData()
    const productsIterated = products.filter(p => p.id !== +id)
    saveData(productsIterated)
    res.redirect("/products")
}