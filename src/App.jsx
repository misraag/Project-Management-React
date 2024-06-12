import { useState } from "react";
import Main from "./components/Main/Main";
import YourProjects from "./components/YourProjects/YourProjects";
import ViewTask from "./components/ViewTask/ViewTask";
import AddProject from "./components/AddProject/AddProject";

function App() {
  const [mainPage, setMainPage] = useState("Main-Page");
  const [listOfProjects, setListOfProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  //CREATING NEW PROJECT***********************************************
  function handleAddProject() {
    setMainPage("Add-Task");
    setSelectedProject(null);
  }

  // ADD PROJECT FUNCTIONS**********************************************
  function handleAddProjectSaved(newTask) {
    setListOfProjects((prevProjects) => [...prevProjects, newTask]);
    setMainPage("Main-Page");
  }

  function handleAddProjectCancelled(data) {
    setMainPage("Main-Page");
  }

  //SIDEBAR FUNCTIONS****************************************************
  function handleViewTask(title) {
    setSelectedProject(title);
    setMainPage("View-Task");
  }

  //VIEW-TASK FUNCTIONS***************************************************
  function handleAddTaskToProject(id, data) {
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
    const updatedProjects = listOfProjects.filter(
      (project) => project.id !== id
    );
    setListOfProjects(updatedProjects);
    setMainPage("Main-Page");
    setSelectedProject(null);
  }

  // ********************************************************************

  return (
    <main className="flex h-screen my-8 flex gap-8 w-[2/3]">
      <YourProjects
        listOfProjects={listOfProjects}
        viewNewTask={handleViewTask}
        selectedProject={selectedProject}
        addNewProject={handleAddProject}
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
    </main>
  );
}

export default App;
