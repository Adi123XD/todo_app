import mongoose from "mongoose";

//   creating a schema for the collection
const schema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  email:  {
    type:String,
    unique:true,
    required:true
  },
  password:  {
    type:String,
    select:false,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});

//   creating the collection with the given schema
const User = mongoose.model("Users", schema);
export default User