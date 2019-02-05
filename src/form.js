import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Register from './Register'
import Login from './Login'

class Form extends Component{
    render(){
        return(
            <div>
                <div><Register></Register></div>
                <div><Login></Login></div>
            </div>
        )
    }
}

export default Form;