const express=require('express')
const {getAlltransc,addtransec,edittransection}=require('../controllers/transactionController')

const router=express.Router()

//Add transec post
router.post('/add-data', addtransec)

//Get transec all data
router.post('/getall',getAlltransc)


//Get  Edit Traansection
router.post('/edit',edittransection)


module.exports=router;
