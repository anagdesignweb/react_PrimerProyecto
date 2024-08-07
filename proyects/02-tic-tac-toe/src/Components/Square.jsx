// 4. definimos el cuadrado de cada celda: children lo que lleva dentro del cuadro, updateBoard es la forma de actualizar ese cuadrado, index el indice del cuadrado con respecto al tablero.
export const Square = ({children, isSelected, updateBoard, index}) => {
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