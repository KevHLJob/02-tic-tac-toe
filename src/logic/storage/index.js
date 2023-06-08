export const saveGameToStorage = ({ board, turn }) => {
    // guardar aqui partida utilizando localstorage, por medio del setitem
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
  }
  //función para iniciar nuevamente local storage con cuadros vacios y turno de x
  //por medio de removeitem
  export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }