var sequence = 0;

var tasks = [];

draw();

function addTask() {
  var task = {
    description: document.getElementById('task').value,
    isDone: false,
    id: sequence,
  }
  sequence++;
  tasks.push(task);
  draw();
}

function draw() {
  document.getElementById('tasks').innerHTML = '';
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var taskEl = document.createElement('div');
    taskEl.className = 'task';
    taskEl.id = task.id;
    var taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.id = task.id;
    taskCheckBox.checked = task.isDone;
    var taskLabel = document.createElement('label');
    taskLabel.for = task.id;
    taskLabel.className = 'container';
    var taskDescription = document.createElement('div');
    taskDescription.className = 'taskdescription';
    taskDescription.innerHTML = task.description;
    var taskAction = document.createElement('a');
    taskAction.href = "#";
    taskAction.onclick = removeTask;
    taskAction.id = task.id;
    var taskImg = document.createElement('img');
    taskImg.id = task.id;
    taskImg.src = 'images/trash.png';
    taskImg.alt = 'Remover tarefa';
    taskAction.appendChild(taskImg);
    taskEl.appendChild(taskCheckBox);
    taskEl.appendChild(taskLabel);
    taskEl.appendChild(taskDescription);
    taskEl.appendChild(taskAction);
    document.getElementById('tasks').appendChild(taskEl);
  }
}

function removeTask (event) {
  var taskId = event.target.id;
  var taskIndex = tasks.findIndex(function(task){
    if (task.id == taskId) {
      return true;
    }
    return false;
  });
  tasks.splice(taskIndex, 1);
  draw();
}