import React from 'react';
import PropTypes from 'prop-types';
import Button from './button'
import './panel.css'

class Panel extends React.Component{

    PropTypes={
        clickHandler:PropTypes.func,
    };
    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this)
    }
    
    handleClick (btnname) {
        this.props.clickHandler(btnname);
    };
    render() {
        return (
            <div className='panel'>
                <div>
                    <Button name="AC" clickHandler={this.handleClick}/>
                    <Button name="-/+" clickHandler={this.handleClick}/>
                    <Button name="<-" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick}/>
                    <Button name="2" clickHandler={this.handleClick}/>
                    <Button name="3" clickHandler={this.handleClick}/>
                </div>

            </div>
        );

    }

}
export default Panel