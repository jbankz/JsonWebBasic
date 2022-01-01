import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Product name be provided']},
    price: {type: Number, required: [true, 'Product price be provided']},
    featured: {type: Boolean, default: false},
    rating: {type: Number, default: 4.5},
    createdAt: {type: Date, default: Date.now()},
    company: {type: String, enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: "{value} is not supported"
    }}
})

export default mongoose.model('Products', ProductSchema);