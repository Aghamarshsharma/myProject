import React from 'react';
import  {useContext}  from 'react';
import  AppContext  from '../App';
import './Letter.css'


function Letter({letterPos , attemptVal}) {
    
    const {board} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    console.log(letter)
  return (
    <div className='letter'>hii</div>
    
  )
}

export default Letter;
