// npx nodemon ServiceWorkerRegistration.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3000;

const allData = [];

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.status(200).send({message:"It works"})
    // res.send("hellow from serve")
})
app.post('/enroll', (req, res)=>{
    // console.log(req.body)
    const {name, email, phone, topic, check} = req.body;
    const newData ={
        name, email, phone, topic, check
    }
    // console.log(name)
    allData.push(newData)
    // console.log(allData)
    // allData.push(data)
    // res.status(200).send({data: req.body})
    res.status(200).send({data: allData})
})
app.get('/enroll', (req, res)=>{
    res.status(200).send({data: allData})
})
app.listen(PORT, function(){
    console.log(`server is listening on port ${PORT}`)
})
console.log(allData)