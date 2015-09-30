/*global TaskList*/
/*global preload_taskItems*/

var taskList;
$(function(){
  //Initial load
  var container = $('#maincontainer');
  taskList = new TaskList({el:container});
  taskList.renderTasks(preload_taskItems, container);
  
  $(document.body).on('submit', 'form.newTaskItem', function(e){
    e.preventDefault();

    var form = $(this);
    $.post('/TaskItems', form.serialize())
    .then(function(taskItem){
      //var parentId = form.find('input[name=parentTask]').val();
      //taskList.addTask(taskItem, form.closest('.taskList'), parentId);
      buildTasks();
      form[0].reset();
    })
    .fail(function(err){
      alert(err);
    });

    return false;
  });
});

function buildTasks(){
  $.get('/TaskItems')
  .then(taskList.renderTasks);
}