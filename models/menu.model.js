import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
  price: Number,
  rating: Number,
  calories: Number,
  protein: Number,
  categories: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  customizations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customization" }],
});

export default mongoose.model("Menu", MenuSchema);
