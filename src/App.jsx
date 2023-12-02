import React from 'react'
import { useState } from 'react'
import './App.css'
import Toggle from './components/toggleBtn'

export const ToggleTheme = React.createContext()
function App() {
  
  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
    <ToggleTheme.Provider value={state}  >
      <button onClick={handleToggle}>Toggle</button>
     <Toggle/>
  
    </ToggleTheme.Provider>
      
    </>
  )
  }

export default App
