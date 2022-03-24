import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import CountDown from "./countdown";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  editTodo: EditTodo;
}

type ToggleTodo = (selectedTodo: Todo) => void;

const TodoListItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}: Props) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState("");
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timeOut, setTimeOut] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(todo.id, newText);
    setNewText("");
    setEditing(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const target = todo.ddl;
      const now = new Date();

      const difference: number = target.getTime() - now.getTime();
      // ddl: new Date('March 24, 2022 19:20:00'),
      const day = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((difference % (1000 * 60)) / 1000);
      setDay(day);
      setHour(hour);
      setMinute(minute);
      setSecond(second);
      if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
        setTimeOut(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [todo.ddl]);

  const timeLeft = (
    <div className="flex font-mono ">
      <CountDown timeUnit={day} unitType={"days"} />
      <CountDown timeUnit={hour} unitType={"hours"} />
      <CountDown timeUnit={minute} unitType={"min"} />
      <CountDown timeUnit={second} unitType={"sec"} />
    </div>
  );

  const outOfTime = (
    <div className="flex items-center text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <h3 className="text-bold text-md mr-1">TimeOut!</h3>
    </div>
  );

  const editingTemplate = (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <div>
        <label>Edit Current Todo</label>
        <input
          type="text"
          className="border-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>

      <button className="ml-2" type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
      <button className="ml-2" type="submit">
        Save
      </button>
    </form>
  );
  //border-2 border-yellow-500

  const viewTemplate = (
    <div className="flex flex-col">
      <div className=" flex justify-between ">
        <label className="cursor-pointer label ">
          <input
            type="checkbox"
            className="checkbox-lg checkbox"
            defaultChecked={todo.complete}
          />
          <span className="ml-4 font-bold">{todo.text}</span>
        </label>
        {timeOut ? outOfTime : timeLeft}
      </div>

      <div className="flex justify-between">

        <div className="flex-1 flex justify-center ">
          <button
            className="btn btn-outline btn-sm flex-1"
            type="button"
            onClick={() => setEditing(true)}
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <span className="flex-1 ml-4 inline-block">Edit</span>
            </div>
          </button>
        </div>

        <div className="mx-2"></div>

        <div className="flex-1 flex justify-center ">
          <button
            className="btn btn-outline btn-error btn-primary btn-sm flex-1"
            type="button"
            onClick={() => deleteTodo(todo.id)}
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="flex-1 ml-4 inline-block">Delete</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate} </li>;
};

export default TodoListItem;
