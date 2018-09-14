import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext, DropTarget } from 'react-dnd'

export default (type, Source, initialProps = {}) => {
  const style = {
    width: '100%',
    height: document.documentElement.scrollHeight,
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 999
  }

  const spec = {
    drop (props, monitor, component) {
      if (!component) {
        return
      }
      const item = monitor.getItem()
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      component.move(left, top)
    }
  }

  function collect (connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget()
    }
  }

  class Target extends Component {
    constructor () {
      super()
      this.state = {
        left: initialProps.initialLeft || 0,
        top: initialProps.initialTop || 0
      }
    }

    move (left, top) {
      this.setState({ left, top })
    }

    render () {
      const { connectDropTarget, el } = this.props
      const { left, top } = this.state
      return (
        connectDropTarget &&
        connectDropTarget(
          <div id={`${type}-t`} style={style}>
            {<Source el={el} left={left} top={top} />}
          </div>
        )
      )
    }
  }

  const Context = DragDropContext(HTML5Backend)(
    DropTarget(type, spec, collect)(Target)
  )

  return Context
}
