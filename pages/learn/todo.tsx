import { useState } from "react";
import { AddTodoForm } from "../../components/AddTodoForm";
import { TodoList } from "../../components/TodoList";
import { nanoid } from "nanoid";
import { NextPageContext } from "next";
import TodoApi from "../../lib/api/todos";
import dayjs from "dayjs";




export default function MyToDo({findTodos}) {
    
  const [todos, setTodos] = useState(findTodos);

  function sortTodos(a: Todo, b: Todo) :number {
    if (a.priority === b.priority) {
      return a.ddl.getTime() - b.ddl.getTime();
    }
    const _a = a.priority.toLowerCase();
    const _b = b.priority.toLowerCase();
    const a_p = _a === "high" ? 1 : _a === "medium" ? 2 : 3;
    const b_p = _b === "high" ? 1 : _b === "medium" ? 2 : 3;
    return a_p - b_p
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

  const addTodo: AddTodo = (text: string, ddl: number, priority: string) => {
    const newTodo = {
      id: "todo-" + nanoid(),
      text,
      complete: false,
      ddl: new Date(ddl),
      priority: priority
    };
    const newTodos = [newTodo,...todos]
    newTodos.sort(sortTodos);
    setTodos(newTodos);
    
  };

  const deleteTodo: DeleteTodo = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo: EditTodo = (id: string, text: string, newDdl: number, newPriority: string) => {
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

export async function getServerSideProps(context: NextPageContext) {
  const findTodos = await TodoApi.findAll();
  return {
    props: {
      findTodos
    }
  }
}

