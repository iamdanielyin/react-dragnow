import React from 'react'
import DragNow from '../../lib/index'

const App = () => (
  <DragNow initialLeft={100}>
    <div style={{ width: 300, height: 300, background: '#4a79dc' }} />
  </DragNow>
)

export default App
