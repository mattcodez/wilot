var React = require('react');
var $ = require('../../vendor/jquery/dist/jquery.js');

module.exports = React.createClass({
  handleSubmit: function(e) {
    console.log('onChange caught');
    var text = React.findDOMNode(this.refs.contents).value.trim();
    console.log('Save change: ' + text);
    //$.post('/TaskItems', (data) => this.setState({data:data}));
  },
  render: function() {
    var taskNodes = this.props.data.map(function (task) {
      return (
        <div key={task.id} className="taskItemBox">
          <input
            type="text"
            ref="contents"
            defaultValue={task.contents}
            onChange={this.handleSubmit} />
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