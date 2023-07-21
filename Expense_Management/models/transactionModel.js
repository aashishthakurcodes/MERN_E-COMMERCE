const mongoose=require('mongoose')

const transectionSchema= new mongoose.Schema({
  amount:{
    type:Number,
    required:[true,'Amount is required'],
  },
  category:{
    type:String,
    required:[true,'Please choose your category'],
  },
  reference:{
    type:String
  },
  description:{
    type:String,
    required:[true,"Description is also requred"]
  },
  date:{
    type:String,
    required:[true,"Date is requred"]
  }
},{timestamps:true})


const transactionModel=mongoose.model('transections',transectionSchema)