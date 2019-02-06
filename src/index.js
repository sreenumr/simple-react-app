import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form'
import './index.css'

class App extends Component {
  render() {
return(
      <Form></Form>
)
  }
}

export default App;
ReactDOM.render(<App/>,document.getElementById('root'))