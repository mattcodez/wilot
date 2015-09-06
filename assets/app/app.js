//var CONST_ES6_BUILD_PATH = './build/';

var _  = require('lodash');
var React = require('react');
var TaskItemBox = require('./components/taskItem.js');

var data=[{contents:"yoo", id:"blah"}];

var ListUI = React.createClass({
  render: function() {
    return (
      <div>
        <TaskItemBox data={this.props.data} />
      </div>
    );
  }
});

React.render(
  <ListUI data={data} />,
  document.getElementById('itemList')
);