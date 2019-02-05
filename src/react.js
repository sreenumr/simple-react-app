import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

  state={
    name:'exampleName',
    des:'example'
  }

  handleMouseOver(e){
    ReactDOM.render(<h1>You just hovered over me</h1>,document.getElementById('hover'))  
  }

  changeText =(e)=>{
    this.setState({
      name:e.target.value
    })
  }

  render(){
const{name , day} = this.props
    return(<div>
      <h1>Hello World!</h1>
      <p>Hello { this.state.name  }</p>
      <button onMouseOver={this.handleMouseOver}>Hover over</button>
      <input type="text" onChange={this.changeText}/>
      <form>
          <input type="text" />
          <input type="submit"/>
      </form>

      <div>
        <h1>Example using props</h1>
          <div>Name {name}</div>
          <div>Day {day}</div>
      </div>

    </div>)
  }
}


  export default App