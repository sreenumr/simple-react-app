import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Register extends Component{

    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="name"></input>
                    <input type="text" placeholder="hobby"></input>
                </form>
            </div>
        )
    }
}

export default Register;