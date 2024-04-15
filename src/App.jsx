import { useState } from 'react'

import './App.css'
import Header from './HomePagecomponents/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
    </>
  )
}

export default App
