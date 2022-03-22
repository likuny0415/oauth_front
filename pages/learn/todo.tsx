import { useState } from "react";
import { AddTodoForm } from "../../components/AddTodoForm";
import { TodoList } from "../../components/TodoList";
import { nanoid } from "nanoid";


const initialTodos: Todo[] = [
  {
    id: "1",
    text: "Walk the dog",
    complete: false,
  },
  {
    id: "2",
    text: "Write app",
    complete: true,
  },
];

export default function MyToDo() {
    const [todos, setTodos] = useState(initialTodos)
    

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                }
            }
            return todo;
        })
        setTodos(newTodos)
    }

    const addTodo: AddTodo = (text: string) => {
        const newTodo = { id: "todo-" + nanoid(), text, complete: false };
        setTodos([...todos, newTodo])
    }

    const deleteTodo: DeleteTodo = (id: string) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    const editTodo: EditTodo = (id: string, text: string) => {
        const newTodos = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    text: text
                }
            }
            return todo;
        })
        setTodos(newTodos)
    }

  return (
      <>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
    <AddTodoForm addTodo={addTodo} />
    </>
  );
}
