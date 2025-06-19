import mongoose, { Schema } from "mongoose";
import { boolean } from "webidl-conversions";

const productSchema = new mongoose.Schema({
    name: {type:String, required:true },
    description: {type:String, required:true },
    price: {type:Number, required:true },
    category: {type:String, required:true },
    inStock: {type:Boolean, required:true }
},{timestamps:true});

export const Product = mongoose.model("Product", productSchema);