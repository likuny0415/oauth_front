import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }: Props) => {
  const [text, setText] = useState("");
  const [ddl, setDdl] = useState(0);
  const [priority, setPriority] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text, ddl, priority);
    setText("");
    const myModal = document.getElementById("my-modal") as HTMLInputElement;
    myModal.checked = false;
  }
  
  const currentDate = dayjs().format("YYYY-MM-DDThh:mm");

  const TodoForm = (
    <form
      className=" grid rounded justify-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="todo" className="label justify-center -mt-8">
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
        required
      />
      <label htmlFor="ddl" className="label justify-center">
        Deadline for this Todo
      </label>
      <input
        id="ddl"
        type="datetime-local"
        defaultValue={currentDate}
        className="input input-bordered w-full max-w-xs "
        onChange={(e) => {
          setDdl(Date.parse(e.target.value));
        }}
        required
      />
      <label htmlFor="priority" className="label justify-center">
        Priority of Todo
      </label>
      <select
        id="priority"
        defaultValue={"Medium"}
        className="select w-full max-w-xs input-bordered"
        onChange={(e) => {
          setPriority(e.target.value);
        }}
        required
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="btn my-2">
        <span>Add Todo</span>
      </button>
    </form>
  );

  return (
    <>
    
      <label htmlFor="my-modal" className="btn modal-button">
        Add Todo
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer ">
        <label className="modal-box relative " htmlFor="">
          {TodoForm}
        </label>
      </label>
    </>

  );
};
