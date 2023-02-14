export function TwitterFollowCard({userName, name, isFollowing}){
 
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'  src={`"https://unavatar.io/${userName}"`} />
                <div>
                    <strong className='tw-followCard-name'>{name}</strong>
                    <span className='tw-followCard-user'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}