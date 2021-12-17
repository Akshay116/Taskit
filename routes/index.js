const express = require ('express');

const router = express.Router();//setting up router 

const controller = require('../controllers/home');//require action on routes 

router.get('/', controller.home);

router.post('/tasks',controller.tasks);// shows task on home

router.get('/delete-task',controller.deleteTasks);//detet task

router.get('/impTasks',controller.impTasks);// for imp task component later on to add here 






module.exports = router;