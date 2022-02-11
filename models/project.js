import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  desc: String,
  added_by: { type: mongoose.Schema.Types.ObjectId, ref: "B13_Student" },
  status: String,
  type: String,
  url: String,
  created_at: Date,
  updated_at: Date,
});

export default mongoose.models.B13_Project ||
  mongoose.model("B13_Project", ProjectSchema);
