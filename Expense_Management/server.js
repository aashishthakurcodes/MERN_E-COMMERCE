const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors')
const dotenv=require('dotenv')
const connectDB=require('./config/connectDB')

//config
dotenv.config();

//DataBase Call
connectDB();
// rest object
const app=express();
//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//routes
//User Routes
app.use("/api/v1/users", require("./routes/userRoutes"));
//Transection Routes
app.use("/api/v1/transection", require("./routes/transactionRoute"));



//PORT
const PORT=8080 || process.env.PORT

//Listen
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})