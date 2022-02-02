import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  telegram_id: String,
  student_id: Number,
  username: String,
  first_name: String,
  last_name: String,
});

export default mongoose.models.B13_Student ||
  mongoose.model("B13_Student", StudentSchema);
