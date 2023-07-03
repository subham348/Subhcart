import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const productCartSchema = new mongoose.Schema(
  {
    product: {
      type: ObjectId,
      ref: "Product",
    },
    name: String,
    count: Number,
    price: Number,
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    products: [productCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: { type: String },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const productCart = mongoose.model("ProductCart", productCartSchema);
const order = mongoose.model("Order", orderSchema);

module.exports = { productCart, order };