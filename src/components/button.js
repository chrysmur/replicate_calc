import React from 'react';
import PropTypes from 'prop-types';
import './button.css'


export default class Button extends React.Component{
    PropTypes = {
        name: PropTypes.string,
        clickHandler: PropTypes.func
        }
        constructor(props){
            super(props)
            this.handleClick =  this.handleClick.bind(this)
        };
    handleClick(event){
        event.preventDefault();
        const {clickHandler} =  this.props
        clickHandler(this.props.name)
    }
    render(){
        return (
            <div className='button'>
            <button className='buttonname' 
            onClick={this.handleClick} >
                {this.props.name}
            </button>
        </div>
        );
    }
}
