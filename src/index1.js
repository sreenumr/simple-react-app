import App from "./react";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App1 extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Example of nesting</h1>
                <div>
                    <App name="name1" day="monday"/>
                    <App name="name2" day="friday"/>
                </div>
            </div>
        )
    }
    
}

ReactDOM.render(
    <App1/>,document.getElementById('root')
  );