/*global TaskList*/
/*global preload_taskItems*/

$(function(){
  //Initial load
  var container = $('#taskList');
  var taskList = new TaskList({el:container});
  taskList.addTasks(preload_taskItems, container);
  
  $(document.body).on('submit', 'form.new', function(e){
    e.preventDefault();

    var form = $(this);
    $.post('/TaskItems', form.serialize())
    .then(function(taskItem){
      taskList.addTask(taskItem, form.closest('.item').find('.taskList'));
      form[0].reset();
    })
    .fail(function(err){
      alert(err);
    });

    return false;
  });
});