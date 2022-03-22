import clsx from "clsx";
import { useEffect, useRef, useState } from "react";


interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo
  editTodo: EditTodo
}

type ToggleTodo = (selectedTodo: Todo) => void;

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo, editTodo }: Props) => {

    const [isEditing, setEditing] = useState(false)
    const [newText, setNewText] = useState("");

    

    const editingTemplate = (
        <form className="flex flex-row" onSubmit={() => editTodo(todo.id, newText)}>
            <div >
                <label>Edit Current Todo</label>
                <input type='text' className="border-2" value={newText} onChange={(e) => setNewText(e.target.value)} />
            </div>
            <button className="ml-2" type="button" onClick={() => setEditing(false)}>Cancel</button>
            <button className="ml-2" type="submit" >Save</button>
        </form>
    )

    const viewTemplate = (
      <div className="flex flex-row">
          <div>
        <input type='checkbox' defaultChecked={todo.complete} />
        <label>{todo.text}</label>
        </div>
        <button className="ml-2" type="button" onClick={() => setEditing(true)}>Edit</button>
        <button className="ml-2" type='button' onClick={() =>  deleteTodo(todo.id)}>Delete</button>
    </div>  
    )

    
    
    return (<li>{isEditing ? editingTemplate : viewTemplate} </li>)


    
};

export default TodoListItem;
