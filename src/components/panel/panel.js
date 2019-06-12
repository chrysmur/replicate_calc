import React from 'react';
//import PropTypes from 'prop-types';
import Button from './button'
import './panel.css'

const ButtonNames=props=> {
    const {row, handler} = props
    const btnnames = row.map((name) =>
        <Button name={name} clickHandler={handler} key={name}/>)
    return (btnnames)
}
const PlaceRows=props=> {
    const {objRows,handler}=props
    const btnRows = Object.keys(objRows).map((rowkey)=>
    <div>
        <ButtonNames row={objRows[rowkey]} handler={handler} key={rowkey} /></div>)
    return btnRows
    
}
const Panel = props=>{
    const objRows= {row1:['AC','-/+','Del','+'],
                    row2:['7','8','9','-'],
                    row3:['4','5','6','x'],
                    row4:['1','2','3','/'],
                    row5:['0','.','='],
                    }
    return (
        <div className='panel'>            
            <PlaceRows objRows={objRows} handler={props.clickHandler} key="objRows"/>
        </div>
        ); 

    }
export default Panel