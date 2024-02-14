import { TodoIcon } from "./";

export function CompleteIcon ({completed, onComplete}) {
    return (
        <TodoIcon
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}/>
    )
}