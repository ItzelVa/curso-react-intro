import './CreateTodoButton.css'
import React from 'react';

export function CreateTodoButton ({openModal,setOpenModal,}) {
    return (
      <button className="CreateTodoButton"
              onClick={(event) => {
                //console.log('click')
                const newOpenModal = !openModal
                setOpenModal(newOpenModal)
              }}>+</button>
    );
}