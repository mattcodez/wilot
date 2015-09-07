var React = require('react');
var $ = require('../../vendor/jquery/dist/jquery.js');

module.exports = React.createClass({
  handleSubmit: function(e) {
    var text = React.findDOMNode(this.refs.contents).value.trim();
    $.post(
      '/TaskItems/' + this.getAttribute('key'),
      {contents:text},
      (data) => this.setState({data:data})
    );
  },
  render: function() {
    let {task} = this.props;
    return (
      <div key={task.id} className="taskItemBox">
      <input
      type="text"
      ref="contents"
      defaultValue={task.contents}
      onChange={this.handleSubmit} />
      </div>
    );
  }
});