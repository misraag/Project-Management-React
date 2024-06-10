import { useRef } from "react";

export default function ViewTask({
  listOfProjects,
  selectedProject,
  addTask,
  deleteTask,
  deleteProject,
  ...props
}) {
  const taskRef = useRef();
  const project = listOfProjects.find(
    (project) => project.title === selectedProject
  );

  function handleAddNewTask() {
    console.log("Adding new task to project");
    console.log(taskRef.current.value);
    if (taskRef.current.value.length > 0) {
      addTask(project.id, taskRef.current.value);
      taskRef.current.value = "";
    }
  }

  function handleDeleteTask(index) {
    console.log("Deleting a task");
    // const taskIndex = project.tasks.findIndex((task) => task === taskRef.current.value);
    console.log(project.id, index);
    deleteTask(project.id, index);
  }

  return (
    <div className="flex flex-col h-screen my-8 w-[50vw]">
      <div className="flex justify-between items-start py-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-[25px] font-bold text-stone-700">
            {project.title}
          </h1>
          <p className="text-gray-500">{project.dueDate}</p>
          <p className="text-gray-600">{project.description}</p>
        </div>
        <button onClick={() => deleteProject(project.id)} className="m-5">
          Delete
        </button>
      </div>
      <hr className="my-2"></hr>
      <div>
        <h1 className="text-[25px] font-bold text-stone-700 my-6">Tasks</h1>
        <div className="flex gap-3">
          <input
            type="text"
            required
            ref={taskRef}
            className="w-[40%] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ></input>
          <button onClick={handleAddNewTask}>Add Task</button>
        </div>
        <ul className="bg-stone-100 mt-7 p-5">
          {project.tasks.map((task, index) => {
            return (
              <div className="flex my-4 justify-between" key={index}>
                <li className=" ">{task}</li>
                <button onClick={() => handleDeleteTask(index)}>Clear</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
