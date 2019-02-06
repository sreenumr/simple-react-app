import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form'
import Todo from './Todo'

class App extends Component {
  render() {
return(
      <div>
        <Form></Form>
        <br></br>
        <Todo></Todo>
      </div>

)
  }
}

export default App;
ReactDOM.render(<App/>,document.getElementById('root'))