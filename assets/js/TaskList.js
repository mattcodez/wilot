var TaskList = function(opts){
  this.el = $(opts.el);
};
TaskList.prototype = {};

TaskList.prototype.addTask = function(taskItem){
  this.el.append($('<div></div>').text(taskItem.contents));
};