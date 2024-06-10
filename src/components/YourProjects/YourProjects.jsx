export default function YourProjects({
  listOfProjects,
  viewNewTask,
  selectedProject,
  addNewProject,
  ...props
}) {
  return (
    <div
      {...props}
      className=" flex flex-col w-[30vw] bg-black p-10 gap-5 text-white"
    >
      <h1 className="text-gray-300">Your Projects</h1>
      <button onClick={addNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        + Add Project
      </button>

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
    </div>
  );
}
