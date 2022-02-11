import mongoose from "mongoose";

const lightBulbsSchema = new mongoose.Schema({
  lights: [Boolean],
});

export default mongoose.models.LightBulbs ||
  mongoose.model("LightBulbs", lightBulbsSchema);
