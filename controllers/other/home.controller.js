const { loadData } = require("../../data")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports=(req,res)=>{
    const products = loadData()
    const productsInsale =  products.filter(p => p.category === "in-sale")
    const productsVisited = products.filter(p => p.category === "visited")
    res.render("home.ejs",{productsInsale,productsVisited,toThousand})
}