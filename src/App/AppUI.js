import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CounterLoading } from '../CounterLoading';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

export function AppUI() {
  const { 
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
        } = React.useContext(TodoContext)
    return(
        <>
          {loading && <CounterLoading/>}
          {!loading &&  <TodoCounter/>}
        
          <TodoSearch/>
        
          <TodoList>
        
            {loading && 
              <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
              </>
            }

            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
                  
            {searchedTodos.map(todo => (
              <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={()=> {
                          return completeTodo(todo.text);
                        }}
                        onDelete={()=> deleteTodo(todo.text)}/>
                    ))
            }
        
          </TodoList>
              
          <CreateTodoButton/>
          {openModal && (
            <Modal>
              <TodoForm></TodoForm>
            </Modal>
          )}
        </>
    )
}