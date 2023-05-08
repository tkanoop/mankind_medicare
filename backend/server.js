const express = require('express')
const app =express()
const dotenv=require('dotenv')
const cors=require('cors')
const morgan=require('morgan')
const clientRoutes=require('./routes/client')
const adminRoutes= require('./routes/admin')
const doctorRoutes=require('./routes/doctor')
const requireAuth = require('./middleware/requireAuth')
dotenv.config()
app.use(express.json())
app.use(morgan('dev'))

const mongoose=require('mongoose')
app.use(
    cors({
        origin:['https://mankindmedicare.online'],
        methods:['GET','POST','PATCH'],
        credentials:true
    })
)

app.use('/backend/api/client',clientRoutes)
app.use('/backend/api/admin',adminRoutes)
app.use('/backend/api/doctor',doctorRoutes)



mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(process.env.PORT,()=>{
    console.log(`port is running at ${process.env.PORT}`);
})