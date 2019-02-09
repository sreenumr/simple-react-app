import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/form'
import Todo from './Components/Todo'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
return(
      <div>
        <Form></Form>
        <Todo></Todo>
      </div>
)
  }
}

export default App;
ReactDOM.render(<App/>,document.getElementById('root'))