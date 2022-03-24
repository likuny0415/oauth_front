import TodoListItem from "./ToDoListItem";



  
  interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo
    editTodo: EditTodo
  }
  
  type ToggleTodo = (selectedTodo: Todo) => void;
  
export const TodoList: React.FC<Props> = ({todos, toggleTodo, deleteTodo, editTodo}: Props) => {

    return (
        <ul>
            {todos.map((todo) => (
                <div key={todo.id}>
                <TodoListItem key={todo.id} deleteTodo={deleteTodo} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} />
                
                </div>
            ))}
           
        </ul>
    )
}
