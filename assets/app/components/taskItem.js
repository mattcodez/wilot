var React = require('react');
var $ = require('../../vendor/jquery/dist/jquery.js');

module.exports = React.createClass({
  handleSubmit: function(e) {
    var text = React.findDOMNode(this.innertext).value.trim();
    console.log('Save change: ' + text);
    //$.post('/TaskItems', (data) => this.setState({data:data}));
  },
  render: function() {
    var taskNodes = this.props.data.map(function (task) {
      return (
        <div className="taskItemBox" contenteditable oninput={this.handleSubmit}>
          {task.contents}
        </div>
      );
    });
    return (
      <div className="nodeList">
        {taskNodes}
      </div>
    );
  }
});