
require('./config/config');
const express= require('express');
const app = express();
const bodyParser= require('body-parser');
const port=process.env.PORT || 3000

app.use(express.static(__dirname+'/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario',(req,res)=>{

    res.json("hello")
    });

app.post('/usuario',(req,res)=>{
let body=req.body;

if (body.nombre===undefined){
res.status(400).json({ok:false,
mensaje:'el nombre es requerido'})

}
else{

}


res.json({persona:body
})
});

app.put('/usuario/:id',(req,res)=>{
let id=req.params.id
res.json({
    id

});
});

app.delete('/usuario',(req,res)=>{

    res.json("delete")
});
    
app.listen(process.env.PORT,()=>{
    console.log(`puerto ${port}`);
});
