import './TodoCounter.css'
import '../TodosLoading/TodosLoading.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

export function TodoCounter() {

  const {
    completedTodos: completed,
    totalTodos: total,
  } = React.useContext(TodoContext)

  const completedAll = (completed === total) && (completed !== 0) ? 
  true : false
    return (
      
        <h1 className='TodoCounter'>
          {!completedAll && <>Has completado <span>{completed}</span> de 
          <span> {total}</span> TODOs</>}
          {completedAll && <span>Felicidades has completodo todo!</span>}
        </h1>
      );
}
