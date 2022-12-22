const { application } = require('express');
const express = require('express');
const app = express();
const PORT = 8080;
const pcComponents = require ('./ProductManager');



app.use(express.urlencoded({extended:true}));


app.get('/products',async (req,res)=>{
    let productList = await pcComponents.getProducts();
    let {limit} = req.query;
    if(limit ===undefined){
        res.json (productList);
        console.log("productos devueltos")
    }else{
        let limitedList = productList.slice(0,limit);
        res.json(limitedList);
    }
})
app.get('/products/:pid',async (req,res)=>{
    let id= parseInt(req.params.pid);
    let product =await  pcComponents.getProductById(id);
    res.json(product);
})

app.listen(PORT, () =>{
    console.log(`Server running on Port ${PORT}`);
})
