import mongoose from "mongoose";

//   creating a schema for the collection
const schema = new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  description:  {
    type:String,
    unique:true,
    required:true
  },
  isCompleted:  {
    type:Boolean,
    default:false
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  createdAt:{
    type:Date,
    defautl:Date.now
  }
});

//   creating the collection with the given schema
const Task = mongoose.model("Tasks", schema);
export default Task