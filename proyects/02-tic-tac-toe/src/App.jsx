/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import './App.css'


//1. definimos los turnos que va a tener el juego
const TURNS = {
  X:'x',
  O:'o'
}
// 2. dibujar nuestro tablero de momento vacío, este paso esta desactivado porque en el paso 5 lo actualizamos.
//const board = Array(9).fill(null)
// 3. Creamos el tablero en la funcion App para visualizarlo  utilizando el map
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

function App() {
//5. necesitamos un estado del cuadrado(para saber si estan rellenos o no los cuadrados) vams a utilizar const board que creamos antes y la metemos dentro de la app, porque necesitamos que cada vez que el usuario de click se actualice el estado. Pero le vamos a añadir el useState y en lugar de ahora tener una variable tendremos un estado con dos posiciones, la primera board y la segunda la forma de actualizar el board:setboard.
  const [board, setBoard] = useState(Array(9).fill(null))

//6. crear un estado para saber quien tiene el TURNO. Como estado inicial ponemos la x( mas adelante se puede cambiar por un aleatorio)
const [turn, setTurn] = useState(TURNS.X)
//7 Añadimos debajo del tablero dos Squares para señalar el turno. Ahora para que visualmente sepamos de quien es el turno vamso a añadir una prop llamada isSelected y le pasamos el estado que ya tenemso creado de turn. y ahora en el componente Square se lo pasamos como parametro y definimos dentro el cambio bisual que queremos,
const updateBoard = (index) => {
  //1.cambiar turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
  //2. actualiza el board para ello añadimos el parametro index para saber donde ha clickado
  //3. creamos un nuevo board, guardamos el turn en la posicion del array donde se ha pinchado( es decir en index) y actualizamos el board
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
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
    </main>

  )
}

export default App
