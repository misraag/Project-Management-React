import { useState} from "react";

export default function ViewTask({
  listOfProjects,
  selectedProject,
  addTask,
  deleteTask,
  deleteProject,
  ...props
}) {
  const [taskValue, setTaskValue] = useState("");
  
  const project = listOfProjects.find(
    (project) => project.title === selectedProject
  );

  function handleAddNewTask() {
    if (taskValue.length > 0) {
      addTask(project.id, taskValue);
      setTaskValue("");
    }
  }

  function handleDeleteTask(index) {
    deleteTask(project.id, index);
  }

  if (!project) {
    return <div>No project found</div>;
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
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            required
            className="w-[40%] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
          <button onClick={handleAddNewTask}>Add Task</button>
        </div>
        <ul className="bg-stone-100 mt-7 p-5">
          {project.tasks.map((task, index) => {
            return (
              <div className="flex my-4 justify-between" key={index}>
                <li>{task}</li>
                <button onClick={() => handleDeleteTask(index)}>Clear</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
