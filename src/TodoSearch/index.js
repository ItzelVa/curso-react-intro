import './TodoSearch.css'
import React from 'react';

export function TodoSearch ({searchValue, setSearchValue,}) {

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