import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
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