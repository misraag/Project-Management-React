import { useState } from "react";
import Main from "./components/Main/Main";
import YourProjects from "./components/YourProjects/YourProjects";
import ViewTask from "./components/ViewTask/ViewTask";
import AddProject from "./components/AddProject/AddProject";

function App() {
  const [mainPage, setMainPage] = useState("Main-Page");
  const [listOfProjects, setListOfProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProject() {
    console.log("add new task");
    setMainPage("Add-Task");
  }

  function handleAddProjectCancelled(data) {
    console.log("added task is cancelled");
    setMainPage("Main-Page");
  }

  function handleAddProjectSaved(newTask) {
    console.log("added task is saved", newTask);
    setListOfProjects((prevProjects) => [...prevProjects, newTask]);
    setMainPage("Main-Page");
  }

  function handleViewTask(title) {
    console.log("clicked to view the project");
    setSelectedProject(title);
    setMainPage("View-Task");
    console.log(title);
  }

  function handleAddTaskToProject(id, data) {
    console.log("Clicked on add task to existing project", data);

    const updatedProjects = listOfProjects.map((project) => {
      if (project.id === id) {
        const updatedTasks = [data, ...project.tasks];
        return { ...project, tasks: updatedTasks };
      }
      return project;
    });

    setListOfProjects(updatedProjects);
  }

  function handleDeleteTaskToProject(id, taskIndex) {
    console.log("deleting the task with index: ", taskIndex);

    const updatedProjects = listOfProjects.map((project) => {
      if (project.id === id) {
        const updatedTasks = project.tasks.filter(
          (task, index) => index !== taskIndex
        );
        return { ...project, tasks: updatedTasks };
      }

      return project;
    });

    setListOfProjects(updatedProjects);
  }

  function handleDeleteProject(id) {
    console.log("Deleting Project with id ", id)
    const updatedProjects = listOfProjects.filter((project) => project.id !== id);

    setListOfProjects(updatedProjects)
    setMainPage("Main-Page")
    setSelectedProject(null);
  }

  return (
    <div className="flex h-screen my-8 flex gap-8">
      <YourProjects
        listOfProjects={listOfProjects}
        viewNewTask={handleViewTask}
        selectedProject={selectedProject}
      />
      {mainPage === "Main-Page" && <Main addTask={handleAddProject} />}
      {mainPage === "Add-Task" && (
        <AddProject
          clickCancel={handleAddProjectCancelled}
          clickSave={handleAddProjectSaved}
          id={listOfProjects}
        />
      )}
      {mainPage === "View-Task" && (
        <ViewTask
          listOfProjects={listOfProjects}
          selectedProject={selectedProject}
          addTask={handleAddTaskToProject}
          deleteTask={handleDeleteTaskToProject}
          deleteProject={handleDeleteProject}
        />
      )}
    </div>
  );
}

export default App;
