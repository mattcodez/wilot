//var CONST_ES6_BUILD_PATH = './build/';

var React = require('react');
var ListUI = require('./components/ListUI.js');

React.render(
  <ListUI url={'/TaskItems'} />,
  document.getElementById('itemList')
);