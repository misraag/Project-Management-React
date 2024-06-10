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
    console.log("clicked to view the project")
    setSelectedProject(title);
    setMainPage("View-Task");
    console.log(title);
  }

  function handleAddTaskToProject(data) {
    console.log("Clicked on add task to existing project", data);
    const project = listOfProjects.find((item) => item.title === selectedProject)
    // console.log(project.tasks)

    const updatedProjects = listOfProjects.map((project) => {
      if(project.title === selectedProject) {
        const updatedTasks = [data, ...project.tasks];
        return {...project, tasks: updatedTasks};
      }
      return project;
    })

    setListOfProjects(updatedProjects)
    
  }

  return (
    <div className="flex h-screen my-8 flex gap-8">
      <YourProjects listOfProjects={listOfProjects} viewNewTask={handleViewTask}/>
      {mainPage==="Main-Page" && <Main addTask={handleAddProject}/>}
      {mainPage==="Add-Task" && <AddProject clickCancel={handleAddProjectCancelled} clickSave={handleAddProjectSaved}/>}
      {mainPage==="View-Task" && <ViewTask listOfProjects={listOfProjects} selectedProject={selectedProject} addTask={handleAddTaskToProject}/>}
    </div>
  );
}

export default App;
