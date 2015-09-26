var TaskList = function(opts){
  this.el = $(opts.el);
};
TaskList.prototype = {};

TaskList.prototype.addTasks = function(taskItems, container){
  var newContainer = $('<div class="taskList"></div>');
  container.append(newContainer);
  
  for (var i = 0; i < taskItems.length; i++){
    this.addTask(taskItems[i], newContainer);
  }
  
  container.append($('<form class="new"></form>')
    .append(
      $('<input type="text" name="contents" placeholder="New Task" >')
  ));
};

TaskList.prototype.addTask = function(taskItem, container){
  var newTask = $('<div class="item"></div>')
    .text(taskItem.contents)
    .append(
      $('<form></form>')
        .addClass('new sub')
        .append($('<input/>').attr({
          name: 'contents',
          type: 'text',
          placeholder: 'Sub Task'
        }))
        .append($('<input/>').attr({
          name: 'parentTask',
          type: 'hidden',
          value: taskItem.id
        }))
    );
  
  container.append(newTask);
  
  if (taskItem.children){
    this.addTasks(taskItem.children, newTask);
  } 
};