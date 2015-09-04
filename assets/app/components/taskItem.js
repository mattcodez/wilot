var React = require('react');
var $ = require('../../vendor/jquery/dist/jquery.js');

var taskItemBox = React.createClass({
  render: function() {
    return (
      <div className="taskItemBox">
        hi
      </div>
    );
  }
});
React.render(
  <taskItemBox />,
  document.getElementById('itemList')
);