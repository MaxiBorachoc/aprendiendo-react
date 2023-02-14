import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName:"midudev",
        name:"Miguel Ángel Durán",
        isFollowing: true,
    },
    {
        userName:"maxibora",
        name:"Maxi",
        isFollowing: false,
    },
    {
        userName:"leomessi",
        name:"Lionel Messi",
        isFollowing: true,
    },
    {
        userName:"angeldimaria",
        name:"Angel Di Maria",
        isFollowing: false,
    }
] 

export function App(){
    
    
    return (
        <div className='App'>
         {
            users.map(({userName, name, isFollowing}) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            ))
         }
        </div>
     )
}