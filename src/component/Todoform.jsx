import React, { useState } from 'react'
import {v4} from 'uuid'
import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap'

//redux

import {connect} from 'react-redux'
import {addTodo} from '../action/todo'

const Todoform=({addTodo})=> {

    const [title, setTitle] = useState("");

    const handleSubmit = e=>{
        e.preventDefault();
        if(title === ""){
            return alert("Please Add Todo")
        }

        const todo= {
            title,
            id: v4()
        }

        addTodo(todo);

        setTitle("");
    }


  return (
    <Form onSubmit={handleSubmit} className='position-absolute m-4 fixed-bottom' >
        <FormGroup>
            <InputGroup>
              <Input 
                type='text'
                name='todo'
                id='todo'
                placeholder='Your next Todo'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
              />
              <>
                <Button color='success' onClick={handleSubmit} >ADD</Button>
              </>
            </InputGroup>
        </FormGroup>
    </Form>
    )
}


const mapStateToProps = state => ({ })

const mapDispatchToProps = dispatch => ({
    addTodo: todo =>{
        dispatch(addTodo(todo))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Todoform) // TODO: Connect