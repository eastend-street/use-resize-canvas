import React from 'react'

import { useMyHook } from 'use-resize-canvas'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
