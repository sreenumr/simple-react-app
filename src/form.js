import React, { Component } from 'react';
import Register from './Register'
import Login from './Login'
import ButtonComponent from './Button'

class Form extends Component{
    
    render(){
        return(
            <div>
                <ButtonComponent></ButtonComponent>
                <Register></Register>
                <Login></Login>
            </div>
        )
    }
}

export default Form;