/**
 * TaskItemsController
 *
 * @description :: Server-side logic for managing Taskitems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  main: function(req, res){
    TaskItems.find().populate('children')
    .then(function(taskItems){
      res.view('homepage', {taskItems:taskItems});
    })
    .catch(console.log);
  }
};

