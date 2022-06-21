// const express = require('express');
// const app = express();
// app.use(express.static('public'));


// app.listen(3000, ()=>{
//     console.log('Servidor funcionando');
// });

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/home.html');
// });

var v = 1
var f1 = function () {
    console.log(v)
}
var f2 = function () {
    var v = 2
    f1()
}
f2()