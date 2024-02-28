
import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CounterLoading } from '../CounterLoading';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react'
import { EmptyResults } from '../EmptyResults';

function App() {

  const { 
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal,
  } = useTodos()

  return(
    <>
      <TodoHeader>
        {loading && <CounterLoading/>}
        {!loading &&  <TodoCounter completed={completedTodos} total={totalTodos}/>}
      
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </TodoHeader>

      <TodoList loading={loading}
                error={error}
                searchedTodos={searchedTodos}
                searchValue={searchValue}
                totalTodos={totalTodos}
                onLoading={() => <><TodosLoading/> <TodosLoading/> <TodosLoading/></>}
                onError={() => <TodosError/>}
                onEmptyTodos={() => <EmptyTodos/>}
                onEmptyResults={(searchValue) => <EmptyResults searchValue={searchValue}/>}
                // render={todo => (
                //   <TodoItem 
                //             key={todo.text} 
                //             text={todo.text}
                //             completed={todo.completed}
                //             onComplete={()=> {
                //               return completeTodo(todo.text);
                //             }}
                //             onDelete={()=> deleteTodo(todo.text)}/>
                //         )}
        >

          {todo => (
                  <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={()=> {
                              return completeTodo(todo.text);
                            }}
                            onDelete={()=> deleteTodo(todo.text)}/>
                        )}

      </TodoList>
    
      {/* <TodoList>
    
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
    
      </TodoList> */}
          
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
    </>
)
}

export default App;
