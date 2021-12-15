const express = require('express');
const port = 3000;
const app =  express(); // set up express in use 






// set up view engine ejs
app.set ('view engine','ejs');
app.set('views','./view');





app.listen(port,function(err){


    if(err){
        console.log('error in starting server:',err);
        return;
    }
    console.log(`server running on port number: ${port}`);//2nd way of writing=`inside`
});
