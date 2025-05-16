
window.onload = async function() {
    fetch("/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
    
         })
    }).then(response => response.json()).then(data => {
        console.log("data: " + data); 
    });
}

function addTask(taskId, taskName, taskDescription) {
}