import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
     return (
        <div className='App'>
            <TwitterFollowCard 
                isFollowing 
                userName="midudev" 
                name="Miguel Ángel Durán" 
            />
            <TwitterFollowCard 
                isFollowing={false} 
                userName="midudev" 
                name="Miguel Ángel Durán" 
            />
            <TwitterFollowCard 
                isFollowing 
                userName="midudev" 
                name="Miguel Ángel Durán" 
            />
        </div>
     )
}