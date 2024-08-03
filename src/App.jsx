import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyWallet from './MyWallet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyWallet/>
    </>
  )
}

export default App
