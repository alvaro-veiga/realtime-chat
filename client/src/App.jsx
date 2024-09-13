import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Join/>
        <Chat/>
      </div>
    </>
  )
}

export default App
