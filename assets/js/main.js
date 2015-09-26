/*global TaskList*/
/*global preload_taskItems*/

$(function(){
  //Initial load
  var container = $('#maincontainer');
  var taskList = new TaskList({el:container});
  taskList.addTasks(preload_taskItems, container);
  
  $(document.body).on('submit', 'form.newTaskItem', function(e){
    e.preventDefault();

    var form = $(this);
    $.post('/TaskItems', form.serialize())
    .then(function(taskItem){
      var parentId = form.find('input[name=parentTask]').val();
      taskList.addTask(taskItem, form.closest('.taskList'), parentId);
      form[0].reset();
    })
    .fail(function(err){
      alert(err);
    });

    return false;
  });
});