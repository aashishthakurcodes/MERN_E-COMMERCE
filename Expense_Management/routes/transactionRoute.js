const express=require('express')
const {getAlltransc,addtransec}=require('../controllers/transactionController')

const router=express.Router()

//Add transec post
router.post('/add', addtransec)

//Get transec all data
router.get('/getall',getAlltransc)


module.exports=router;
