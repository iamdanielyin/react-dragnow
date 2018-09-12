import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'

export default (type) => {
  const style = {
    position: 'absolute',
    cursor: 'move',
    pointerEvents: 'auto'
  }

  const spec = {
    beginDrag (props) {
      const { el, left, top } = props
      return { el, left, top }
    }
  }

  function collect (connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
  }

  const propTypes = {
    el: PropTypes.element.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  }

  class Source extends Component {
    render () {
      const { isDragging, connectDragSource, el, left, top } = this.props
      const t = window.document.getElementById(`${type}-t`)
      const win = t.ownerDocument.defaultView
      const POINTER_EVENTS = 'pointer-events'
      const pe = win.getComputedStyle(t, null)[POINTER_EVENTS]
      if (isDragging) {
        if (pe !== 'auto') {
          t.style[POINTER_EVENTS] = 'auto'
        }
        return null
      } else {
        if (pe !== 'none') {
          t.style[POINTER_EVENTS] = 'none'
        }
      }
      return connectDragSource(
        <div
          id={`${type}-s`}
          style={Object.assign({ left, top, opacity: isDragging ? 0.5 : 1 }, style)}
        >
          {el}
        </div>
      )
    }
  }

  Source.propTypes = propTypes
  return DragSource(type, spec, collect)(Source)
}
