import React, {useState} from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setcategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = ({ target: { value } }) => setInputValue(value);

    const handdleSubmit= (e)=>{
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setcategories( cats => [inputValue,...cats])
            setInputValue('')
        }
    }
    return (
        <>
            <form onSubmit={handdleSubmit}>
                <input type="text" onChange={handleInputChange} placeholder="Ingrese la búsqeuda" value={inputValue} className="animate__animated animate__fadeIn"></input>
            </form>
        </>
    )
}
AddCategory.propTypes={
    setcategories: PropTypes.func.isRequired
}
export default AddCategory
 