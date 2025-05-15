const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const fs = require('fs');

var tasks;




function removeTask(TaskName){

}

function addTask(TaskName, TaskDescription){

}

function start(){
    console.log("Server started on port " + PORT);
    tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
    conse.log(tasks);
}

start();