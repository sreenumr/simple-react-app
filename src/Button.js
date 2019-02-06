import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap'

export default class ButtonComponent extends Component{

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
            <Button onClick={this.change}>{this.state.text}</Button>
        )
    }
    

}