import { useState } from "react";
import { nanoid } from "nanoid";
import { AddTodoForm } from "../components/AddTodoForm";
import { TodoList } from "../components/TodoList";
import MyToDo from "./learn/todo";

const initialTodos: Todo[] = [
  {
    id: "1",
    text: "Write English essay",
    complete: 1,
    ddl: new Date(new Date().getTime() + 3600000 * 2),
    priority: 3,
  },
  {
    id: "2",
    text: "Finish math quiz",
    complete: 1,
    ddl: new Date(new Date().getTime() + 86400000),
    priority: 2,
  },
  {
    id: "3",
    text: "Buy coffee",
    complete: 1,
    ddl: new Date(new Date().getTime() + 86400000 * 2),
    priority: 1,
  },
];

export default function Tourist() {
  return (
    <MyToDo findTodos={initialTodos}  />
  )
}


