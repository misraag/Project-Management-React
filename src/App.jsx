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

  return (
    <div className="flex h-screen my-8 flex gap-8">
      <YourProjects class="flex w-[35vw] bg-red-800"/>
      {mainPage && <Main addTask={handleAddNewTask}/>}
      {!mainPage && <AddTask/>}
    </div>
  );
}

export default App;
