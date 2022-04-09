import { useState } from "react";
import { AddTodoForm } from "../../components/AddTodoForm";
import { TodoList } from "../../components/TodoList";
import { nanoid } from "nanoid";
import { NextPageContext } from "next";
import TodoApi from "../../lib/api/todos";
import dayjs from "dayjs";
import useSWR from "swr";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import axios from "axios";

const initialTodos: Todo[] = [
  {
    id: "2",
    text: "Write app",
    complete: 1,
    ddl: new Date("March 29, 2022 20:50:21"),
    priority: 3,
  },
  {
    id: "3",
    text: "Open the door",
    complete: 1,
    ddl: new Date("May 20, 2022 12:50:21"),
    priority: 2,
  },
  {
    id: "4",
    text: "Keep the eyes open",
    complete: 1,
    ddl: new Date("May 20, 2022 12:50:21"),
    priority: 1,
  },
];

export default function MyToDo({ findTodos }) {
  const [todos, setTodos] = useState(findTodos);

  function sortTodos(a: Todo, b: Todo): number {
    if (a.priority === b.priority) {
      return dayjs(a.ddl).valueOf() - dayjs(b.ddl).valueOf();
    }
    return b.priority - a.priority;
  }

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

  const addTodo: AddTodo = async (
    text: string,
    ddl: number,
    priority: number
  ) => {
    const newTodo = {
      id: "todo-" + nanoid(),
      text,
      complete: 1,
      ddl: new Date(ddl),
      priority: priority,
    };

    const newTodos = [newTodo, ...todos];
    newTodos.sort(sortTodos);
    setTodos(newTodos);
    await TodoApi.createTodo(newTodo);
  };

  const finishTodo: FinishTodo = async (id: string) => {
    await TodoApi.finishTodo(id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  const deleteTodo: DeleteTodo = async (id: string) => {
    await TodoApi.deleteTodo(id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo: EditTodo = async (
    id: string,
    text: string,
    newDdl: number,
    newPriority: number
  ) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          text: text,
          ddl: new Date(newDdl),
          priority: newPriority,
        };
      }
      return todo;
    });
    await TodoApi.editTodo(id, text, new Date(newDdl), newPriority);
    newTodos.sort(sortTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col items-center my-10 px-16">
          <div className="w-full max-w-lg flex items-center justify-center">
            <AddTodoForm addTodo={addTodo} />
            {/* <div className="flex border-2 justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
          </div>

          <div className="relative w-full max-w-xl">
            {/* <div className="absolute top-0 -left-4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
            <div className="relative ">
              <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                finishTodo={finishTodo}
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
