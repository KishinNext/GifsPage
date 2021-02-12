import React, {useState} from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'
const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch'])

    return (
        <>
            <h2 className="animate__animated animate__fadeIn">GifExpertApp</h2>
            <hr></hr>
            <AddCategory setcategories={setcategories}/>     
            <ol>
                {
                    categories.map((category, index)=> 
                        <GifGrid category={category} key={category}/>
                        
                    )
                }
            </ol>  
        </>
    )
}

export default GifExpertApp
