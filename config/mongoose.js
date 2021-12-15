const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-app');


const db  = mongoose.connection;
db.on('err',console.error.bind(console,"Error conncting Mongodb"));
db.on('open',function(){
   console.log('connected to database : MogoDb');
});

module.exports = db;
