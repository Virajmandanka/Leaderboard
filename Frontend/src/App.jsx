import { useState } from 'react'

import './App.css'
import Adduser from './components/adduser'
import Userselecter from './components/userselecter'
import Point from './components/point'
import Leaderboard from './components/leaderboard'



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     
      <Adduser/>
     
      <Point/>
      <Leaderboard/>
      
    

       
      
    </>
  )
}

export default App
