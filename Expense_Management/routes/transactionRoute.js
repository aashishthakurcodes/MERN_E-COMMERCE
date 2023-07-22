const express=require('express')
const {getAlltransc,addtransec}=require('../controllers/transactionController')

const router=express.Router()

//Add transec post
router.post('/add-data', addtransec)

//Get transec all data
router.post('/getall',getAlltransc)


module.exports=router;
