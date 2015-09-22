var TaskList = function(opts){
  this.el = $(opts.el);
};
TaskList.prototype = {};

TaskList.prototype.addTask = function(taskItem){
  var newTask = this.el.append($('<div></div>').text(taskItem.contents));
  this.el.find('form.new.sub').remove();
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
};