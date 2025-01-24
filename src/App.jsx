import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './template/Header'
import About from './template/About'
import View from './template/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div>Demo Program to understand GitHub App</div>
      <About/>
      <View/>
    </>
  )
}

export default App
