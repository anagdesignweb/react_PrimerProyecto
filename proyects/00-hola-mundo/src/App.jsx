import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="anana" name="Ana Garcia" />
            <TwitterFollowCard isFollowing={false} userName="elonmusk" name="Elon Musk" />          
        </section>
    )
}