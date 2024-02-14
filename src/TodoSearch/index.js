import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import React from 'react';

export function TodoSearch () {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  return (
      <input className="TodoSearch" 
            placeholder="Hacer ejercicio"
            value={searchValue}
            onChange={(event)=>{
              console.log('Escribiste en el input')
              setSearchValue(event.target.value)
            }}/>
    );
}