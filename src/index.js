import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form'

class App extends Component {
  render() {
return(
    <div>
      <Form></Form>
    </div>
)
  }
}

export default App;
ReactDOM.render(<App/>,document.getElementById('root'))