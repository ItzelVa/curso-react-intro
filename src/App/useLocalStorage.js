import React from "react";

export function useLocalStorage(itemName, initialValue) {

  const [state,dispatch] = React.useReducer(reducer,initialState({initialValue}))
  const {item,loading,error,} = state

  const onError = (error) => {
    dispatch({type: actionTypes.error, payload: error})
  }

  const onLoading = () => {
    dispatch({type: actionTypes.loading})
  }

  const onSave = (item) => {
    dispatch({type: actionTypes.save, payload:item})
  }

    //const [item,setItem] = React.useState(initialValue)
    //const [loading, setLoading] = React.useState(true)
    //const [error, setError] = React.useState(false)
  
    React.useEffect( () => {  
      setTimeout( () => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
    
        let parsedItem
  
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }
        else{
          parsedItem = JSON.parse(localStorageItem)
          //setItem(parsedItem)
          onSave(parsedItem)
        }
  
        //setLoading(false)
        onLoading()
        } catch(error){
          //setLoading(false)
          //setError(true)
          onLoading()
          onError(error)
        }
      }, 3000)
      
    },[itemName,initialValue])
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      //setItem(newItem)
      onSave(newItem)
    }

    return {item,saveItem,loading,error}
  }

const initialState = ({initialValue}) => ({
  item : initialValue,
  loading: true,
  error: false,
})

const actionTypes = {
  error: 'ERROR',
  loading: 'LOADING',
  save: 'SAVE'
}

const reducerObject = (state,payload) => ({
  [actionTypes.error]: {
    ...state,
    error:true,
  },
  [actionTypes.loading]: {
    ...state,
    loading: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  }
})
const reducer = (state,action) => reducerObject(state,action.payload)[action.type] || state



  // const defaultTodos = [
//   {text: 'Cortar cebolla' , completed: false},
//   {text: 'Hacer ejercicio' , completed: false},
//   {text: 'Tomar agua' , completed: false},
//   {text: 'Ver la hora' , completed: true},
//   {text: 'Ver TikToks' , completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
//localStorage.removeItem('TODOS_V1')