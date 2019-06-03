import React from 'react';
import './display.css'

export default class Display extends React.Component{
    render(){
        return (
            <div className='display'>
                {this.props.total}
            </div>
        );
    }
}