import { Square } from "./Square.jsx"

export const WinnerModal =({winner, resetGame}) =>{
  
    //si ganador es igual a null, retorna nulo
    if (winner === null) return null
        //si winner es falso, empate, de lo contrario ganó
    const winnerText = winner === false ? 'Empate' : 'Ganó:'



    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

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
