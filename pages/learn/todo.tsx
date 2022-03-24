import { useState } from "react";
import { AddTodoForm } from "../../components/AddTodoForm";
import { TodoList } from "../../components/TodoList";
import { nanoid } from "nanoid";

const initialTodos: Todo[] = [
  {
    id: "1",
    text: "Walk the dog",
    complete: false,
    ddl: new Date('March 24, 2022 20:05:50'),
  },
  {
    id: "2",
    text: "Write app",
    complete: true,
    ddl: new Date('March 29, 2022 20:50:21'),
    
  },
];

export default function MyToDo() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { id: "todo-" + nanoid(), text, complete: false, ddl: new Date()};
    setTodos([...todos, newTodo]);
  };

  const deleteTodo: DeleteTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo: EditTodo = (id: string, text: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          text: text,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      
        <div>
          <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
            <div className="relative w-full max-w-lg">
            <h1>What needs to be down</h1>
            <AddTodoForm addTodo={addTodo} />
            </div>

            <div className="relative w-full max-w-lg">
            
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
              
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                 />
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
