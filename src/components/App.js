import React, {useState, useEffect} from 'react';

function App(){
    
    const [image, setImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setIsLoaded(true)
            setImage(data.message)
        })
    }, [])

    if (!isLoaded){
        return <p>Loading...</p>
    }
    return (
        <img src={image} alt="A Random Dog" />
    )
}

export default App