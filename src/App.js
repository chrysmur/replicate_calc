import React from 'react';
import './App.css';
import Panel from './components/panel'
import Calculate from './components/calc';
import Display from './components/display'

class App extends React.Component {
  constructor(){     
    super()
    this.state = {obj:{
      res:null,
      newval:null,
      valone:null,
      ops:null
    }}
    this.handleClick =  this.handleClick.bind(this)
  } 

  handleClick(btnname) {
    let obj=  this.state.obj;
    obj.newval=btnname;
   this.setState({obj:Calculate(obj)})
   console.log(this.state.obj)
  }
  
  render(){
  return (
    <div className='disppanel'>
    <Display total ={this.state.obj.res || this.state.obj.valone || '0'}/>
      <Panel clickHandler={this.handleClick}/>
    </div>
  );
  }
}

export default App;
