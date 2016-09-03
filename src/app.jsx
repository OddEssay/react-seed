import React from 'react'
import ReactDOM from 'react-dom'

const HelloMessage = React.createClass({
  render() {
    return <div>Hello {this.props.name}</div>
  }
})

const mountNode = document.getElementById('app')

ReactDOM.render(<HelloMessage name="World" />, mountNode)
