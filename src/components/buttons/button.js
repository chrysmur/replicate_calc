import React from 'react';
//import PropTypes from 'prop-types';
import './button.css'

const Button = (props) => {
    const {name, clickHandler} = props
    const handleClick=(event) =>{
        event.preventDefault()
        clickHandler(name)
    }
        return (
            <div className='button'>
                <button className='buttonname'
                onClick = {handleClick}> <span id="btnname">{name}</span></button>
            </div>
        )

        
    
}
export default Button