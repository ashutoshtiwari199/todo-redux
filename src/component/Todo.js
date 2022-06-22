import React from 'react'
import {
    ListGroup
    , ListGroupItem
} from 'reactstrap'

import { FaCheckDouble} from 'react-icons/fa'

//redux

import {connect} from 'react-redux'
import { removeTodo } from '../action/todo'

const Todo=({todos, markComplete})=> {

  return (
    <ListGroup className='mt-5 mb-2 d-flex justify-content-between' >
        {todos.map((todo)=>(
            <ListGroupItem key={todo.id} className='d-flex justify-content-between m-2' >
                {todo.title}
                <span onClick={()=>{markComplete(todo.id)}} >
                    <FaCheckDouble />
                </span>
            </ListGroupItem>
        ))}
    </ListGroup>
    )
}


const mapStateToProps = state =>({
    todos : state.todos
})

const mapDispatchToProps = dispatch =>({
    markComplete : id => {
        dispatch(removeTodo(id));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo) //connect