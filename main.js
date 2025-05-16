// update taks: fs.writeFile('task.json', JSON.stringify(tasks));
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));

const fs = require('fs');

var tasks;

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});

function removeTask(taskId){
    delete tasks.tasks[taskId];
    fs.writeFile('task.json', JSON.stringify(tasks));
}


app.post('/start', (req, res) => {
    console.log("Start request received");
    res.body = tasks.task;
});

app.post('/addTask', (req, res) => {
    var taskId = req.body.taskId;
    var taskName = req.body.taskName;
    var taskDescription = req.body.taskDescription;

    tasks.tasks[taskId] = {
        name: taskName,
        description: TaskDescription
    };

    fs.writeFile('task.json', JSON.stringify(tasks));
});

app.post('/removeTask', (req, res) => {
    var taskId = req.body.taskId;
    delete tasks.tasks[taskId];
    fs.writeFile('task.json', JSON.stringify(tasks));
});



console.log("Server started on port " + PORT);
tasks = JSON.parse(fs.readFileSync('task.json', 'utf8'));