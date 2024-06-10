export default function ViewTask({
  listOfProjects,
  selectedProject,
  ...props
}) {
  const project = listOfProjects.find(
    (project) => project.title === selectedProject
  );

  return (
    <div className="flex h-screen my-8 flex gap-8">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <p className="text-gray-500">{project.dueDate}</p>
    </div>
  );
}
