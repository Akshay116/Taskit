const express = require('express');
const port = 8000;
const app =  express(); // set up express in use 





app.use(express.static('public'))
// set up view engine ejs
app.set ('view engine','ejs');
app.set('views','./views');//rendering pages from here 
app.use(express.static('assets'));// midlleware 

app.use('/' , require('./routes'));//using routes 





app.listen(port,function(err){  // default method 


    if(err){
        console.log(`error in starting server and erroe is: ${err}`);
      return;
    }
    console.log(`server running on port number: ${port}`);//2nd way of writing=`inside`
});
