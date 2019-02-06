import React, { Component } from 'react';

class Register extends Component{


    state = {
        on:true,
    };

    render(){
        return(
         
                <form>
                    <input type="text" placeholder="reg"></input>
                    <input type="text" placeholder="reg"></input>
                </form>
         
        )
    }
}

export default Register;