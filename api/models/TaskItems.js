/**
* TaskItems.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {
    contents:      {type:'string'},
    dateCompleted: {type:'datetime'},
    parentTask:    {model:'TaskItems'},
    children:      {collection:'TaskItems', via:'parentTask'}
  },
  
  getChildren: function(parentId = null){
    //TODO: How do we stop infinite recursion? 
    //Check call stack? Might not work with promises
    this.find({parentTask:parentId})
    .then(function(tasks){
      //we could populate each single child level but I think it would just
      //add more to complexity rather than help
      var getList = [];
      for (let task of tasks){
        //TODO: just attaching the children won't work
        //as toObject() will remove them when sending to client
        getList.push(TaskItems.getChildren(task.id));
      }
      return Promise.all(getList);
    });
  }
};
