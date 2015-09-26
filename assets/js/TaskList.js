var TaskList = function(opts){
  this.el = $(opts.el);
};
TaskList.prototype = {};

TaskList.prototype.addTasks = function(taskItems, areChildren){
  for (var i = 0; i < taskItems.length; i++){
    this.addTask(taskItems[i], areChildren);
  }
};

TaskList.prototype.addTask = function(taskItem, isChild){
  var newTask = this.el.append(
    $('<div class="item"></div>')
      .text(taskItem.contents)
  );
  //this.el.find('form.new.sub').remove();
  newTask.append(
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
  
  if (taskItem.children){
    this.addTasks(taskItem.children, true);  
  } 
};