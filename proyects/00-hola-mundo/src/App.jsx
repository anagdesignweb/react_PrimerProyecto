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