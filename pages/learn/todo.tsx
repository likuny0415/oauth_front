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
    complete: false,
    ddl: new Date("March 29, 2022 20:50:21"),
    priority: 3
  },
  {
    id: "3",
    text: "Open the door",
    complete: false,
    ddl: new Date("May 20, 2022 12:50:21"),
    priority: 2
  },
  {
    id: "4",
    text: "Keep the eyes open",
    complete: false,
    ddl: new Date("May 20, 2022 12:50:21"),
    priority: 1
  },
];



export default function MyToDo({findTodos}) {


    function sortTodos(a: Todo, b: Todo) :number {
      if (a.priority === b.priority) {
        return dayjs(a.ddl).valueOf() - dayjs(b.ddl).valueOf();
      }
      return b.priority - a.priority
    }

    
  const [todos, setTodos] = useState(findTodos);

  

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

  const addTodo: AddTodo = async (text: string, ddl: number, priority: number) => {
    
    
    const newTodo = {
      id: "todo-" + nanoid(),
      text,
      complete: false,
      ddl: new Date(ddl),
      priority: priority
    };
    const newTodos = [newTodo,...todos]
    const status =  await TodoApi.createTodo(newTodo)
    
    // setTodos(newTodos);
    
  };

  const deleteTodo: DeleteTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo: EditTodo = (id: string, text: string, newDdl: number, newPriority: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          text: text,
          ddl: new Date(newDdl),
          priority: newPriority
        };
      }
      return todo;
    });
    newTodos.sort(sortTodos)
    setTodos(newTodos);
  };

  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col items-center my-10 px-16">

          <div className="w-full max-w-lg flex items-center justify-center">
            
            <AddTodoForm addTodo={addTodo} />
          </div>

          <div className="relative w-full max-w-xl">
            {/* <div className="absolute top-0 -left-4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
            <div className="relative ">
              <TodoList
                todos={findTodos}
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


