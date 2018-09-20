import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext, DropTarget } from 'react-dnd'
import { getSize } from './utility'

export default (type, Source, initialProps = { autoCenter: true }) => {
  const body = window.document.body
  const html = window.document.documentElement
  const height = Math.max(
    body.offsetHeight,
    body.scrollHeight,
    html.clientHeight,
    html.offsetHeight,
    html.scrollHeight
  )

  const style = {
    width: '100%',
    height,
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
        tid: `${type}-t`,
        left: initialProps.initialLeft || 0,
        top: initialProps.initialTop || 0
      }
      this.resetOffest = this.resetOffest.bind(this)
    }

    move (left, top) {
      this.setState({ left, top })
    }

    resetOffest (sourceSize) {
      const autoCenter = (typeof initialProps.autoCenter === 'boolean') ? initialProps.autoCenter : true
      if (autoCenter === true) {
        const targetSize = getSize(this.state.tid)
        targetSize.height = window.document.body.offsetHeight || targetSize.height
        this.setState({
          left: targetSize.width / 2 - sourceSize.width / 2,
          top: targetSize.height / 2 - sourceSize.height / 2
        })
      }
    }

    render () {
      const { connectDropTarget, el } = this.props
      const { left, top } = this.state
      return (
        connectDropTarget &&
        connectDropTarget(
          <div id={this.state.tid} style={style}>
            {<Source el={el} left={left} top={top} reportSize={this.resetOffest} />}
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
