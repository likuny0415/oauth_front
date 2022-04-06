import TodoListItem from "./ToDoListItem";



  
  interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    finishTodo: FinishTodo
    editTodo: EditTodo
    deleteTodo: DeleteTodo
  }
  
  type ToggleTodo = (selectedTodo: Todo) => void;
  
export const TodoList: React.FC<Props> = ({todos, toggleTodo, finishTodo, editTodo, deleteTodo}: Props) => {

    return (
        <ul className="">
            {todos?.map((todo) => (
                <div key={todo.id}>
                <TodoListItem key={todo.id} finishTodo={finishTodo} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
                
                </div>
            ))}
           
        </ul>
    )
}
