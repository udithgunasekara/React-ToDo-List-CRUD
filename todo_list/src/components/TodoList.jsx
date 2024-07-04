import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

    const {todos} = props

    

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {

            console.log('Index is:', todoIndex)
           
           return (
          
                <TodoCard {...props} key = {todoIndex} index = {todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
                
              
            )
            
        })}
        

    </ul>
  )
}
