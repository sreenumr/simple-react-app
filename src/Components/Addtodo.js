import React,{Component} from 'react'

 class AddTodo extends Component{
   
    state={
             content:""
    }

    getTodo=(e)=>{
        const todo = e.target.value
        this.setState({
            id:Math.random(),
            content:todo,
        })
    }

    formSubmit=(e)=>{
        e.preventDefault();
            this.props.addTodo(this.state.content)
    }

    render()  { 
        return(
         <form onSubmit={this.formSubmit}>
            <input type="text"  onChange={this.getTodo}></input>
            <button onClick={this.formSubmit}>AddTodo</button>
         </form>
    
        )
         }
}

export default AddTodo