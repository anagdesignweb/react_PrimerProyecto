import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './Components/Square'
import {WINNER_COMBOS, TURNS } from './Components/constants'
import { WinnerModal } from './Components/WinnerModal'

//4. aqui estaba antes el componente, ahora esta separado
// Las CONSTANTES las vamos a sacar tambien a un archivo constants.js

function App() {
// estado para crear y actualizar tablero
const [board, setBoard] = useState(Array(9).fill(null))
// estado para cambiar turnos
const [turn, setTurn] = useState(TURNS.X)
// estado para cambiar a ganador
const [winner, setWinner] = useState(null)
// metodo para saber si hay un ganador
const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS){
    const [a, b, c] = combo; // Desestructuración correcta de combo
    // Esto es equivalente a:
    // const a = combo[0];
    // const b = combo[1];
    // const c = combo[2];

    // ahora condicional para comprobar si hay combinacion
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c]){
        return boardToCheck[a]
    }
  }
}
const resetGame = () => {
  //le damos los valores iniciales a los estados
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}
const checkEndGame = (newBoard) => {
 return newBoard.every((square)=> square !== null)
}
const updateBoard = (index) => {
  // no se escribe nada si ya tiene algo
  if(board[index] || winner) return
  //Actualiza el tablero
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
  //1.cambiar turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
  //revisa si hay un ganador
  const newWinner = checkWinner(newBoard)
  if (newWinner) {
    setWinner(newWinner)
    confetti()
    //alert(`el ganador es ${newWinner}`) este alert no funcionaria, porque react es asincrono, por lo tanto cuando pasas ese alert aun no se ha actualizao el tablero, asi que esta seria una mala opcion.
  } else if (checkEndGame(newBoard)){
    setWinner(false) // empate
  }
}

  return (

    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {
          board.map((square,index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

        <WinnerModal resetGame={resetGame} winner={winner} />


    </main>

  )
}

export default App
