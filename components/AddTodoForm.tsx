import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }: Props) => {
  const [text, setText] = useState("");
  const [ddl, setDdl] = useState(0);
  const [priority, setPriority] = useState(2);

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text, ddl, priority);
    setText("");
    const myModal = document.getElementById("my-modal") as HTMLInputElement;
    myModal.checked = false;
  }
  
  const currentDate = dayjs().format("YYYY-MM-DDThh:mm");

  function priorityNumber(value: string) {
    const lowerCaseP = value.toLowerCase();
    const priorityNumber = lowerCaseP == "low" ? 1 : lowerCaseP == "high" ? 3: 2;
    return priorityNumber
  }

  const TodoForm = (
    <form
      className="flex flex-col rounded justify-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="todo" className="label justify-center ">
        Todo
      </label>
      <input
        type="text"
        id="todo"
        value={text}
        className="input input-bordered w-full "
        onChange={(e) => {
          setText(e.target.value);
        }}
        required
      />
      <label htmlFor="ddl" className="label justify-center">
        Deadline
      </label>
      <input
        id="ddl"
        type="datetime-local"
        defaultValue={currentDate}
        className="input input-bordered w-full"
        onChange={(e) => {
          setDdl(Date.parse(e.target.value));
        }}
        required
      />
      <label htmlFor="priority" className="label justify-center">
        Priority 
      </label>
      <select
        id="priority"
        defaultValue={"Medium"}
        className="select w-full input-bordered"
        onChange={(e) => {
          setPriority(priorityNumber(e.target.value));
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
