import { useState } from 'react'
import './App.css'


// constante para definir los turnos que va a tener el juego
const TURNS = {
  X:'x',
  O:'o'
}

// 4. definimos el cuadrado de cada celda: children lo que lleva dentro del cuadro, updateBoard es la forma de actualizar ese cuadrado, index el indice del cuadrado con respecto al tablero.
const Square = ({children, isSelected, updateBoard, index}) => {
  const className= `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
    //window.alert("ha hecho click")
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

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
    //alert(`el ganador es ${newWinner}`) este alert no funcionaria, porque react es asincrono, por lo tanto cuando pasas ese alert aun no se ha actualizao el tablero, asi que esta seria una mala opcion.
  } // TODO: check if game is over
}

  return (

    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_,index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Ganó'
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
      )
      }


    </main>

  )
}

export default App
