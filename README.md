# react-dragnow

A simple component for making elements draggable, base on [react-dnd](https://www.npmjs.com/package/react-dnd).

## Installing

```sh
npm install react-dragnow
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import DragNow from 'react-dragnow'

const App = () => (
  <DragNow initialLeft={100}>
    <div style={{ width: 300, height: 300, background: '#4a79dc' }} />
  </DragNow>
)

ReactDOM.render(<App />, document.querySelector('body'))
```

![snapshot](https://raw.githubusercontent.com/yinfxs/react-dragnow/master/snapshot.gif)

## Props

* `initialLeft` - Initial left value, default is 0.
* `initialTop` - Initial top value, default is 0.