const transactionModel = require('../models/transactionModel')

//Getting all transec
const getAlltransc=async(req,res)=>{
    try {
        const getAll=await transactionModel.find({userid:req.body.userid,});
        res.status(200).send(getAll)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }

}



//Adding new transec
const addtransec=async(req,res)=>{
    try {
        console.log("Received data:", req.body); 
    const newTransec=new transactionModel(req.body)
    await newTransec.save()
    console.log("Received data:", req.body); 
    res.status(201).send('Transaction Created')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports ={getAlltransc,addtransec}