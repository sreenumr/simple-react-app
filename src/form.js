import React, { Component } from 'react';
import Register from './Register'
import Login from './Login'
import {Button} from 'react-bootstrap'

class Form extends Component{
    

    state={
        login:true,
        reg:false,
        text:"Login",
    }
    
    change=()=>{

        if( this.state.login )
        this.setState(
            {
                text:"Register",
                login:false,
                reg:true
            }
        )
        else   
            this.setState({
                text:"Login",
                login:true,
                reg:false
            })
    }


    render(){
        return(
            <div>
                
                <Button onClick={this.change}>{this.state.text}</Button>
                <Register></Register>
                <Login></Login>
            </div>
        )
    }
}

export default Form;