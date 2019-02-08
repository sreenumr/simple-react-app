import React,{Component} from 'react'

 class AddTodo extends Component{
   
    state={
        id:Math.random(),
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
        console.log(this.state.content);
        this.props.addTodo(this.state.content)
    }

    render()  { return(
         <form onSubmit={this.formSubmit}>
            <input type="text" onChange={this.getTodo}></input>
            <button onClick={this.formSubmit}>AddTodo</button>
         </form>
    
        )
         }
}

export default AddTodo