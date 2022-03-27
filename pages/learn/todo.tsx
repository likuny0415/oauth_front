import { useState } from "react";
import { AddTodoForm } from "../../components/AddTodoForm";
import { TodoList } from "../../components/TodoList";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

const initialTodos: Todo[] = [
  {
    id: "1",
    text: "Walk the dog",
    complete: false,
    ddl: new Date("March 24, 2022 20:05:50"),
    priority: "High",
  },
  {
    id: "2",
    text: "Write app",
    complete: true,
    ddl: new Date("March 29, 2022 20:50:21"),
    priority: "Low"
  },
  {
    id: "3",
    text: "Open the door",
    complete: true,
    ddl: new Date("May 20, 2022 12:50:21"),
    priority: "Low"
  },
  {
    id: "4",
    text: "Keep the eyes open",
    complete: false,
    ddl: new Date("May 20, 2022 12:50:21"),
    priority: "Medium"
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

  const addTodo: AddTodo = (text: string, ddl: number, priority: string) => {
    const newTodo = {
      id: "todo-" + nanoid(),
      text,
      complete: false,
      ddl: new Date(ddl),
      priority: priority
    };
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
        <div className="min-h-screen flex flex-col items-center my-10 px-16">

          <div className="relative w-full max-w-lg">
            
            <AddTodoForm addTodo={addTodo} />
          </div>

          <div className="relative w-full max-w-xl">
            {/* <div className="absolute top-0 -left-4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
            <div className="relative ">
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
