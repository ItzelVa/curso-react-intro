import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';
import React from 'react';

export function CreateTodoButton () {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
    return (
      <button className="CreateTodoButton"
              onClick={(event) => {
                //console.log('click')
                const newOpenModal = !openModal
                setOpenModal(newOpenModal)
              }}>+</button>
    );
}