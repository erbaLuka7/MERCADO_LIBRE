const { loadData, saveData } = require("../../data")

module.exports = (req,res)=>{
    const {id} = req.params
    const {name,price,discount,description,category} = req.body
    const products = loadData()
    const productsIterated = products.map(p => {
        if(p.id === +id){
            const productModified = {
                ...p,
                name:name.trim(),
                price: +price,
                discount: +discount,
                description: description.trim(),
                category: category.trim()
            }
            return productModified
        }
        return p
    })
    saveData(productsIterated)
    res.redirect(`/products/detail/${id}`)
}