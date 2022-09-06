import React from 'react'
import './styles/App.scss'
import { Board } from './components'
import { GameContextProvider } from './contexts'

function App () {
  return (
    <GameContextProvider>
      <div className="container">
        <Board />
      </div>
    </GameContextProvider>
  )
}

export default App
