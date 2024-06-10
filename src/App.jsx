import { useState } from "react";
import Main from "./components/Main/Main";
import YourProjects from "./components/YourProjects/YourProjects";
import AddTask from "./components/AddTask/AddTask";
import ViewTask from "./components/ViewTask/ViewTask";

function App() {
  const [mainPage, setMainPage] = useState("Main-Page");
  const [listOfProjects, setListOfProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddNewTask() {
    console.log("add new task");
    setMainPage("Add-Task");
  }

  function handleAddTaskCancelled(data) {
    console.log("added task is cancelled");
    setMainPage("Main-Page");
  }

  function handleAddTaskSaved(newTask) {
    console.log("added task is saved", newTask);
    setListOfProjects((prevProjects) => [...prevProjects, newTask]);
    setMainPage("Main-Page");
  }

  function handleViewTask(title) {
    console.log("clicked on task")
    setSelectedProject(title);
    setMainPage("View-Task");
    console.log(title);
  }

  return (
    <div className="flex h-screen my-8 flex gap-8">
      <YourProjects listOfProjects={listOfProjects} viewNewTask={handleViewTask}/>
      {mainPage==="Main-Page" && <Main addTask={handleAddNewTask}/>}
      {mainPage==="Add-Task" && <AddTask clickCancel={handleAddTaskCancelled} clickSave={handleAddTaskSaved}/>}
      {mainPage==="View-Task" && <ViewTask listOfProjects={listOfProjects} selectedProject={selectedProject}/>}
    </div>
  );
}

export default App;
