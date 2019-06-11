var tasks = []; //localStorage, firebase, mysql



function addTask () {
  var task = {
    description: document.getElementById('task').value,
    isdone: false,
    id: tasks.length
  }

  tasks.push(task);
  render();
}

function render () {
  document.getElementById('tasks').innerHTML = '';
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var taskEl = document.createElement('div');
    taskEl.className = 'task';
    taskEl.id = task.id;
    var taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.id = task.id;
    var taskLabel = document.createElement('label');
    taskLabel.for = task.id;
    taskLabel.className = 'container';
    var taskDescription = document.createElement('div');
    taskDescription.className = 'taskdescription';
    taskDescription.innerHTML = task.description;
    var taskAction = document.createElement('a');
    var taskImg = document.createElement('img');
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

