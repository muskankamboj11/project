const express=require('express')
const router=require('./Routers/routes')
const bodyparser=require('body-parser');

const app=express()

app.use(bodyparser.json())
app.use(express.urlencoded({extended:false}));
app.use(router);
app.listen(2020,()=>{
    console.log("Connected to server with port 2020");
})