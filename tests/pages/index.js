// import DragNow from '../../lib/index'
// import { Card, Button } from 'antd'

// export default () => (
//   <div>
//     <Button>点我</Button>
//     <DragNow initialTop={10} initialLeft={200} >
//       <Card title='Card title' extra={<a href='#'>More</a>} style={{ width: 300 }}>
//         <p>Card content</p>
//         <p>Card content</p>
//         <p>Card content</p>
//         <Button>点我2</Button>
//       </Card>
//     </DragNow>
//   </div>
// )

import React from 'react'
import DragNow from '../../lib/index'

const App = () => (
  <DragNow>
    <div style={{ width: 150, height: 150, background: '#4a79dc' }} />
  </DragNow>
)

export default App
