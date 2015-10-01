var TaskList = function(opts){
  this.el = $(opts.el);
};
TaskList.prototype = {};

TaskList.prototype.renderTasks = function(taskItems){
  this.el.empty();
  this.addTasks(taskItems, this.el);
};

TaskList.prototype.addTasks = function(taskItems, container, parentId){
  var newContainer = $('<div class="taskList"></div>');
  container.append(newContainer);
  
  for (var i = 0; i < taskItems.length; i++){
    this.addTask(taskItems[i], newContainer);
  }
  
  newContainer.append(
    this.getNewForm(parentId)
  );
};

TaskList.prototype.addTask = function(taskItem, container){
  var newTask = $('<div class="item"></div>')
    .text(taskItem.contents);
  
  //If taskItem has children, it's taskList will have the form
  if (taskItem.children && taskItem.children.length > 0){
    newTask.append(
      this.getNewForm(taskItem.id)
    );
  }
  
  container.append(newTask);
  
  if (taskItem.children){
    this.addTasks(taskItem.children, newTask, taskItem.id);
  }
};

TaskList.prototype.getNewForm = function(parentId){
  var form = $('<form class="newTaskItem"></form>')
    .append($('<input/>').attr({
      name: 'contents',
      type: 'text',
      placeholder: 'New Task',
      required: ''
    })
  );
  
  if (parentId){
    form.append($('<input/>').attr({
      name: 'parentTask',
      type: 'hidden',
      value: parentId
    }));
  }
  
  return form;
};