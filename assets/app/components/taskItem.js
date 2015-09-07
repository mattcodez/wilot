var React = require('react');
var $ = require('../../vendor/jquery/dist/jquery.js');

module.exports = React.createClass({
  handleSubmit: function(e) {
    var text = React.findDOMNode(this.refs.contents).value.trim();
    //$.post('/TaskItems', (data) => this.setState({data:data}));
  },
  render: function() {
    var that = this;
    var taskNodes = this.props.data.map(function (task) {
      return (
        <div key={task.id} className="taskItemBox">
          <input
            type="text"
            ref="contents"
            defaultValue={task.contents}
            onChange={that.handleSubmit} />
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