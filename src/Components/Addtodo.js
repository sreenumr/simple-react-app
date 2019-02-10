import React,{Component} from 'react'

 class AddTodo extends Component{
   
    state={
             content:""
    }

    getTodo=(e)=>{
        const todo = e.target.value
         
                this.setState({
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
            <input required type="text"  onChange={this.getTodo} ></input>
            <button type="submit" onClick={this.formSubmit}>AddTodo</button>
         </form>
    
        )
    }
}

export default AddTodo