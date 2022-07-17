// npx nodemon ServiceWorkerRegistration.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3000;
let dbResults =[];


let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'angular_db'
});
 
connection.connect();
//  TODO  doar 3 connexiuni gratuite
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!  ! ?");
    con.query("SELECT * FROM angular_db", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        dbResults = result;
      });

  });
 
connection.end();

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