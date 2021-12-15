const task = require("../models/taskinfo");

module.exports.home = function(req,res){
       
    task.find({},function(err , tasks){
        if(err)
        {
            return;
        }
        res.render('home' , {
            tasks: tasks,
        })
    })
   
}

module.exports.tasks = function(req,res){
    task.create({
     description : req.body.description,
     category: req.body.category,
     priority: req.body.priority,
     taskdate: req.body.taskdate,

     tasks: this.tasks

    },function(err,newtasks){
        if(err){console.log('error in date'); return}
       if(newtasks.duedate =='')
       {
           newtasks.duedate = 'NO';
       }
       console.log(newtasks)
       res.redirect('/');
       
        
    });
}
module.exports.deleteTasks = function(req ,res){
    let id = req.query;
    let count = Object.keys(id).length;
 

    for(let i = 0 ;i< count ;i++)
    {
        task.findByIdAndDelete(Object.keys(id)[i] , function(err){
            if(err){
              return;
            }
          })
    }
    res.redirect('back');

}