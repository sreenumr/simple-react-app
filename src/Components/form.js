import React, { Component } from 'react';
import Register from './Register'
import Login from './Login'
import './index.css'

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
            <div className="Form">
                <button onClick={this.change}>{this.state.text}</button>
                {this.state.reg?<Register></Register>:null}
                {this.state.login?<Login></Login>:null}
            </div>
        )
    }
}

export default Form;