import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from './services/fact.js'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App(){
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    //fetching de datos

   // para recuperar la cita al cargar la página
    useEffect(()=>{
        getRandomFact().then(newFact => setFact(newFact))
    }, [])
    //NO OLVIDAR EL [] PARA LAS DEPENDENCIAS!!

    // para recuperar la imagen cada vez que tenemos una cita nueva

    useEffect(()=>{
        if (!fact) return

        const threeFirstWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response =>{
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])

    const handleClick = async ()=>{
        const newFact = await getRandomFact()
        setFact(newFact)
    }


    return(
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img 
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
            
        </main>
    )
} 