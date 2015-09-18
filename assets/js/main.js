$(function(){
  var taskList = new TaskList({el:'#taskList'});
  $('form.new').on('submit', function(e){
    e.preventDefault();

    var form = $(this);
    $.post('/TaskItems', form.serialize())
    .then(function(taskItem){
      taskList.addTask(taskItem);
    })
    .fail(function(err){
      alert(err);
    });

    return false;
  });
});

var TaskList = function(opts){
  this.el = $(opts.el);
};
TaskList.prototype = {};

TaskList.prototype.addTask = function(taskItem){
  this.el.append($('<div></div>').text(taskItem.contents));
};