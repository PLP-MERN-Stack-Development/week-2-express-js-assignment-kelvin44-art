//import express package
import express from "express";
import mongoose from "mongoose";
import {Product} from "./Models/product.js";

//instatiating an express app and the port number 
const app = express();
const PORT = 3000;

//connect with the mongodb atlas and connect the database
const MONGOURI = 'mongodb://localhost:27017/student';
await mongoose.connect(MONGOURI).then(()=>{
    console.log("database connected!!!");
});

//Use am inbuuilt middleware to parse the data
app.use(express.json());

//Adding data to the db using express
app.post('/person', async (req, res)=>{
  
    //This destructures the product as it is comes from the body
    const { name, description, price, category, inStock} = req.body;
    //
    const newProduct =  new Product({name, description, price, category,inStock,});
    //await is for waiting for the product to be created and then save the new product in the //database
    await newProduct.save();
    console.log(newProduct);
    res.send("product added");

});

//Updating data in the mongodb
app.put('/person', async (req, res)=>{
  
    //This destructures the product as it is comes from the body
    const { name} = req.body;
    // store the result of the data using a variable
    const productData =  await Product.find({name});
    console.log(productData);
    res.send("product added");

});
//delete data from the account
app.delete('/product/:name', async (req, res)=>{
    const {id} = req.params
    await Product.findByIdAndDelete(id);
    res.send('product deletes');
})

//make a default path
app.get('/', async (req,res)=>{
    await console.log('Excersing the express knowledge');
    res.send(`Hello World`);
});

//Listening the app 
app.listen(PORT, ()=>{
    console.log(`Running on the http://localhost:${PORT}`);
});

