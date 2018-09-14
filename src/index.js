import React from 'react'
import Source from './source'
import Target from './target'

class App extends React.Component {
  constructor (props) {
    super(props)
    const type = `${Date.now()}`
    const source = Source(type)
    const target = Target(type, source, props)
    this.state = {
      Target: target
    }
  }

  render () {
    const { Target } = this.state
    return <Target el={this.props.children} />
  }
}

export default App
