/** @jsx React.DOM */

var React = require('React');

var StaticContainer = React.createClass({
  getDefaultProps: function() {
    return {shouldUpdate: false};
  },

  shouldComponentUpdate: function(nextProps) {
    return nextProps.shouldUpdate || (this.props.staticKey !== nextProps.staticKey);
  },

  render: function() {
    return this.props.children;
  }
});

module.exports = StaticContainer;