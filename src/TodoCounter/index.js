import './TodoCounter.css'
import '../TodosLoading/TodosLoading.css'
import React from 'react';

export function TodoCounter({completed,total}) {

  const completedAll = (completed === total) && (completed !== 0) ? 
  true : false
    return (
      
        <h1 className='TodoCounter'>
          {!completedAll && <>Has completado <span>{completed}</span> de 
          <span> {total}</span> TODOs</>}
          {completedAll && <span>Felicidades has completado tus TODOs!</span>}
        </h1>
      );
}
