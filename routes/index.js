const express = require ('express');

const router = express.Router();//setting up router 

const controller = require('../controllers/home');//require action on routes 

router.get('/', controller.home);

router.post('/tasks',controller.tasks);

router.get('/delete-task',controller.deleteTasks);






module.exports = router;