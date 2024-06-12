import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import FormRef from "../Form/Form";

export default function AddProject({ clickCancel, clickSave, ...props }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleFormSubmit(event) {
    console.log("Form Is Submitted");
    event.preventDefault();

    const newTask = {
      id: generateUniqueId(),
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      tasks: [],
    };
    clickSave(newTask);
  }

  function generateUniqueId() {
    return uuidv4(); // Generate a version 4 UUID as the ID
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  return (
    <form
      {...props}
      className="mt-4 text-left w-[50vw]"
      onSubmit={handleFormSubmit}
      onKeyDown={handleKeyDown}
    >
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={clickCancel}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>

      <FormRef labelName="TITLE*" type="text" ref={title}/>
      <FormRef labelName="DESCRIPTION*" isTextArea type="text" ref={description}/>
      <FormRef labelName="DUE DATE*" type="date" ref={dueDate}/>

    </form>
  );
}
