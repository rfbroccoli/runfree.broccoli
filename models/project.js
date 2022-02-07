import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  desc: String,
  first_name: String,
  telegram_id: String,
  type: String,
  updated_at: Date,
});

export default mongoose.models.B13_Project ||
  mongoose.model("B13_Project", ProjectSchema);
