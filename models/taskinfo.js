const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String ,
    },
    priority: {
        type: String,
    },
    taskdate: {
        type: String,
    }





});

const task = mongoose.model('task',taskSchema);
module.exports = task;
