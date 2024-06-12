import Button from "../AddProjectButton/AddProjectButton";

export default function YourProjects({
  listOfProjects,
  viewNewTask,
  selectedProject,
  addNewProject,
  ...props
}) {
  return (
    <aside
      {...props}
      className=" flex flex-col w-[1/3] bg-black p-10 gap-5 text-white"
    >
      <h1 className="text-gray-300">Your Projects</h1>
      <Button onClick={addNewProject}>+ Add Project</Button>

      <ul>
        {listOfProjects.map((listItem) => {
          return (
            <li
              onClick={() => viewNewTask(listItem.title)}
              className={`my-4 hover:cursor-pointer p-2 rounded-md ${
                selectedProject === listItem.title
                  ? "text-white bg-stone-600"
                  : "text-stone-400"
              }`}
            >
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
