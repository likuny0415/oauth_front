import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import CountDown from "./countdown";
import PriorityBadge from "./PriorityBadge";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  editTodo: EditTodo;
}

type ToggleTodo = (selectedTodo: Todo) => void;

const TodoListItem: React.FC<Props> = ({
  todo,
  deleteTodo,
  editTodo,
}: Props) => {
  const [isEditing, setEditing] = useState(false);
  
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timeOut, setTimeOut] = useState(false);
  const [effect, setEffect] = useState(false);
  
  const [newDdl, setNewDdl] = useState(dayjs(todo.ddl).valueOf());
  const [newPriority, setNewPriority] = useState(todo.priority);
  const [text, setText] = useState(todo.text);

  const editTodoDate = dayjs(todo.ddl).format("YYYY-MM-DDThh:mm");

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(todo.id, text, newDdl, newPriority);
    setEditing(false);
    const currentTime = new Date();
    if (newDdl > currentTime.getTime()) {
      setTimeOut(false)
    }
  }

  function handleClick(e) {
    setEffect(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 500);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const target = dayjs(todo.ddl);
      const now = dayjs();
      
      const difference: number = target.valueOf() - now.valueOf()
      const day = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((difference % (1000 * 60)) / 1000);
      if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
        setTimeOut(true);
      }
      if (difference > 0) {
        setDay(day);
        setHour(hour);
        setMinute(minute);
        setSecond(second);
      } 
    }, 1000);

    return () => clearInterval(interval);
  }, [todo.ddl]);

  const timeLeft = (
    <div className="flex font-mono my-1 md:mr-2 ">
      <CountDown timeUnit={day} unitType={"days"} />
      <CountDown timeUnit={hour} unitType={"hours"} />
      <CountDown timeUnit={minute} unitType={"min"} />
      <CountDown timeUnit={second} unitType={"sec"} />
    </div>
  );

  const outOfTime = (
    <div className="flex items-center  md:my-0 text-red-700">
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
      <h3 className="text-bold text-sm md:text-md mr-1">TimeOut!</h3>
    </div>
  );

  // after clicking the dot dot dot , i want a modal form to edit my todo
  // it must have ddl and priority
  // just create another modal form

  const EditTodoForm = (
    <div className="flex flex-col justify-center ">
      <label htmlFor="ddl" className="label justify-center -mt-4">
        Deadline
      </label>
      <input
        id="ddl"
        type="datetime-local"
        defaultValue={editTodoDate}
        className="input  input-bordered w-full  "
        onChange={(e) => {
          setNewDdl(Date.parse(e.target.value));
        }}
        required
      />
      <label htmlFor="priority" className="label justify-center">
        Priority
      </label>
      <select
        id="priority"
        defaultValue={todo.priority}
        className="select w-full input input-bordered"
        onChange={(e) => {
          setNewPriority(e.target.value);
        }}
        required
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="btn mt-4">
        <span>Add Todo</span>
      </button>
      </div>
  );

  const editingTemplate = (
    <form className="flex flex-col md:flex-row my-4" onSubmit={handleSubmit}>
      <div className="md:hidden flex justify-center items-center my-2 ">
        <div className="badge badge-lg">Editing</div>
      </div>

      <input type="checkbox" id="editTodo" className="modal-toggle" />
      <label htmlFor="editTodo" className="modal cursor-pointer ">
        <label className="modal-box relative" htmlFor="">
          {EditTodoForm}
        </label>
      </label>

      <div className="md:flex-1 input-group border-r-0 ">
        <input
          type="text"
          className="input input-bordered input-secondary w-full max-w-lg border-r-0 hover:animation-todoDisappear"
          defaultValue={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className=" ">
          <button
            tabIndex={0}
            className="btn bg-white text-red-400 border-secondary hover:text-purple-400 hover:bg-secondary hover:border-secondary focus:border-secondary focus:ring-0"
            onClick={(e) => {
              e.preventDefault();
              const myModal = document.getElementById(
                "editTodo"
              ) as HTMLInputElement;
              myModal.checked = true;
            }}
          >
            
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
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="md:flex-1 flex my-2 md:my-0 justify-center ">
          <button
            className="btn btn-outline btn-primary md:ml-2 flex-1"
            type="button"
            onClick={() => setEditing(false)}
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
              <span className="flex-1 ml-4 inline-block">Cancel</span>
            </div>
          </button>
        </div>

        <div className="md:flex-1 flex justify-center md:mr-2">
          <button
            className="btn btn-outline btn-accent md:ml-2 flex-1"
            type="submit"
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
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
              <span className="flex-1 ml-4 inline-block">Save</span>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
  //border-2 border-yellow-500
  // cursor-pointer label overflow-x-auto
  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  // bg-gradient-to-r from-cyan-500 to-blue-500
  // "flex justify-center items-center my-1 "

  // flex flex-col md:flex-row md:justify-between justify-center items-center

  const viewTemplate = (
    <div className="flex flex-col mt-2 ">
      <div
        className={`${
          effect && "animate-todo "
        } flex flex-col md:flex-row md:justify-between justify-center items-center`}
      >
        <div className=" flex justify-center items-center my-1">
          <input
            type="checkbox"
            className="checkbox-lg checkbox checkbox-primary "
            defaultChecked={todo.complete}
            onClick={handleClick}
          />

          <span className="ml-2 font-bold ">{todo.text}</span>
        </div>
        <div className="flex flex-col md:flex-row items-center -mt-1 mb-1 md:my-0">
          {timeOut ? outOfTime : timeLeft}
          <div className="my-1">
          <PriorityBadge priority={todo.priority} />
          </div>
        </div>
      </div>

      <div className="md:flex justify-between md:my-2">
        <div className="flex-1 flex justify-center ">
          <button
            className="btn btn-outline md:btn-sm flex-1"
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

        <div className="flex-1 flex justify-center  mt-2 md:mt-0">
          <button
            className="btn btn-outline btn-error btn-primary md:btn-sm flex-1"
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
      <div className="divider my-1"></div>
    </div>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate} </li>;
};

export default TodoListItem;
