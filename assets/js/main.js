$(function(){
  var taskList = new TaskList({el:'#taskList'});
  $(document.body).on('submit', 'form.new', function(e){
    e.preventDefault();

    var form = $(this);
    $.post('/TaskItems', form.serialize())
    .then(function(taskItem){
      taskList.addTask(taskItem);
      form[0].reset();
    })
    .fail(function(err){
      alert(err);
    });

    return false;
  });
});