import { useState } from 'react'
import AppRouter from './app/source/routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App
