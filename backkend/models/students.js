import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  stuname: "String",
  stuemail: "String",
  stugender: "String",
  stustream: "String",
});
export default mongoose.model("Students", studentSchema);
