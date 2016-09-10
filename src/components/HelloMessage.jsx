import React from 'react'

export const HelloMessage = React.createClass({
  render() {
    return <div>Hello {this.props.params.name}</div>
  }
})
