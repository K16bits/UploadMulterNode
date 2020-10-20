const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const multer = require('multer');


const local = multer.diskStorage({ // Configuração do local de upload do Multer
    destination: './upload',
    filename: (req,file,callback) => {
        callback(null,file.fieldname + '-'+Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({ storage: local }).single('img') // gravar as configurações 


app.listen(3333);
app.set('view engine','ejs');

app.get("/",(req,res) => res.render('home'));

app.post("/",upload,(req,res) => {
    console.log(req.body,req.file);
    res.send("Enviou!")
    })