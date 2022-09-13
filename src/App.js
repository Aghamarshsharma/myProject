import React from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {createContext , useState} from 'react';
import {boardDefault} from './words.js';
export const AppContext =createContext();


function App() {
  const [board, setBoard] = useState(boardDefault)
  console.log(board)
  
  
  return (
      <div>
      <AppContext.Provider value = {{board, setBoard}}>
      <Board/>
      <Keyboard/>
      </AppContext.Provider>
      </div>
      
  )
}

export default App
