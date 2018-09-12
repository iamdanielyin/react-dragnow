import React from 'react'
import Source from './source'
import Target from './target'

class App extends React.Component {
  constructor (props) {
    super(props)
    const type = `${Date.now()}`
    const source = Source(type)
    const el = props.children
    const target = Target(type, el, source, props)
    this.state = {
      children: target
    }
  }

  render () {
    const Children = this.state.children
    return <Children />
  }
}

export default App
