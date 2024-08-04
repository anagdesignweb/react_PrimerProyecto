import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
    {
        userName:'midudev',
        name:'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName:'pacoHdezs',
        name:'Paco H.',
        isFollowing: false
    },
    {
        userName:'nananan',
        name:'Nanai',
        isFollowing: true
    },
]


export function App () {
    return (
        <section className='App'>

        {   /* Aqui vamos a hacer un bucle para mostrar los diferentes usuarios del array users */
            users.map(user => {
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                    /* en reac cuando renderizamso elementos y hacemos bucles o algo asi que se repita hay que darle siemrpe al elemtne una key unica, para asegurarnos de que es unica podemos usar algo que sepamos que es unico de este elemento como el userName que suele ser unico, o si tuviese un id de base de datos añadiendole una palabra para que sepamos que no se repite en otro lado del codigo*/
                        key={userName+name}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                     </TwitterFollowCard>
                )
            })
        }


            <TwitterFollowCard
                userName="anana"
                name="Ana Garcia"
                initialIsFollowing={true}
            />

            <TwitterFollowCard
                userName="elonmusk"
                name="Elon Musk"
                initialIsFollowing={false}
            />
        </section>
    )
}