import { useState } from 'react'

export function TwitterFollowCard ({userName, name, initialIsFollowing}) {
    // aqui abajo usamos el hook useState, este devuelve un objeto, el primero es el valor, y el segundo la forma de actualizar el estado(el cual usamos despues en la funcion handleclick para cambiar el estado inicial) el parametro que le pasamos al useState es el valor por defecto de isFollowing, aqui podemos pasarle directamente un parametro, o como estaria mejro hecho que es pasandole una prop, en este caso le vamos a dar una prop inicial al componente en APP, asi inicializara con el valor que tenga ese componente.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    // estas dos funciones de abajo son para cambiar las classes de css segun el estado.
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-btn is-following' : 'tw-followCard-btn'

    const handleClick = () => { //esta funcion es la que se le pasa al onclick para que cambie el estado.
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="El avatar de kikobeats" src={`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}