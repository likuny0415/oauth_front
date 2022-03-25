import { useState } from "react";


interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}: Props) => {
    const [text, setText] = useState("");

    return (
        <form>
            <input type='text' value={text} className="input input-bordered w-full max-w-xs" onChange={(e) => {
                setText(e.target.value)
            }} />
            <button type="submit" onClick={(e) => {
                e.preventDefault();
                addTodo(text);
                setText('')
            }}>Add Todo</button>
        </form>
    )
}