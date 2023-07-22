const moment = require('moment/moment');
const transactionModel = require('../models/transactionModel')


//Getting all transec
const getAlltransc=async(req,res)=>{
    try {
       const {frequency,selectDate,type}=req.body;
        const getAll=await transactionModel.find({
            ...(frequency !== "custom"
            ? {
                date: {
                  $gt: moment().subtract(Number(frequency), "d").toDate(),
                },
              }
            : {
                date: {
                  $gte: selectDate[0],
                  $lte: selectDate[1],
                },
              }),
          userid: req.body.userid,
          ...(type !== "all" && { type }),
        });
        res.status(200).json(getAll);
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