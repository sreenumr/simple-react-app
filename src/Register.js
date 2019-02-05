import React, { Component } from 'react';

class Register extends Component{

    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="name" ></input>
                    <input type="text" placeholder="place"></input>
                </form>
            </div>
        )
    }
}

export default Register;