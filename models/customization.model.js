import mongoose from "mongoose";

const CustomizationSchema = new mongoose.Schema({
  name: String,
  price: Number,
  type: String,
  image_url: String, 
});

export default mongoose.model("Customization", CustomizationSchema);
