import React from 'react';
import './App.css';
import Panel from './components/panel'
import Calculate from './components/calculate';

class App extends React.Component {
  constructor(){     
    super()
    this.state = {
      res:null,
      newval:null,
      ops:null
    }
    this.handleClick =  this.handleClick.bind(this)
  } 

  handleClick() {
    return (
      alert("It worked")
    )
  }
  render(){
  return (
    <div className='disppanel'>
      <Panel clickhandler={this.handleClick}/>
    </div>
  );
  }
}

export default App;
