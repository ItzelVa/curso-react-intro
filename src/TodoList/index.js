
import './TodoList.css'

export function TodoList (props) {
    return (
      <section className="TodoList">
        {props.loading && props.onLoading()}
        {props.error && props.onError()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(!props.loading && !props.searchedTodos.length && !!props.totalTodos) && props.onEmptyResults(props.searchValue)}
        {props.searchedTodos.map(props.children)}

      </section>
      
    );
}