import { useState } from "react";
import Main from "./components/Main/Main";
import YourProjects from "./components/YourProjects/YourProjects";
import AddTask from "./components/AddTask/AddTask";

function App() {
  const [mainPage, setMainPage] = useState(true);

  function handleAddNewTask() {
    console.log("add new task");
    setMainPage(false);
  }

  function handleAddTaskCancelled() {
    console.log("added task is cancelled");
    setMainPage(true);
  }

  function handleAddTaskSaved() {
    console.log("added task is saved");
    setMainPage(true);
  }

  return (
    <div className="flex h-screen my-8 flex gap-8">
      <YourProjects/>
      {mainPage && <Main addTask={handleAddNewTask}/>}
      {!mainPage && <AddTask clickCancel={handleAddTaskCancelled} clickSave={handleAddTaskSaved}/>}
    </div>
  );
}

export default App;
