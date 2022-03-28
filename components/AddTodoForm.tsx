import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }: Props) => {
  const [text, setText] = useState("");
  const [ddl, setDdl] = useState(0);
  const [priority, setPriority] = useState("");

  const currentDate = dayjs().format("YYYY-MM-DDThh:mm");

  return (
    <form className="bg-gray-200 grid rounded justify-center">
      <label htmlFor="todo" className="label justify-center">
        Your Todo
      </label>
      <input
        type="text"
        id="todo"
        value={text}
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <label htmlFor="ddl" className="label justify-center">
        Deadline for this Todo
      </label>
      <input
        id="ddl"
        type="datetime-local"
        value={currentDate}
        className="input input-bordered w-full max-w-xs "
        onChange={(e) => {
          setDdl(Date.parse(e.target.value));
        }}
      />
      <label htmlFor="priority" className="label" >Priority of Todo</label>
      <select id="priority" defaultValue={"High"} className="select w-full max-w-xs" onChange={(e) => setPriority(e.target.value)}>
        <option disabled value="High" >
          High
        </option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button
        type="submit"
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text, ddl, priority);
        }}
      >
        <span>Add Todo</span>
      </button>
     
    </form>
  );
};
