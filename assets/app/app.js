//var CONST_ES6_BUILD_PATH = './build/';

var _  = require('lodash');
var React = require('react');
var TaskItemBox = require('./components/taskItem.js');

React.render(
  <TaskItemBox />,
  document.getElementById('itemList')
);