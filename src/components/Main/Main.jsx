import imageLogo from "../../assets/no-projects.png";
import Button from "../AddProjectButton/AddProjectButton";

export default function Main({ addTask, ...props }) {
  return (
    <div
      {...props}
      className="flex flex-col w-[50vw] text-center items-center space-y-5 mt-16"
    >
      <img className="h-[60px] w-[60px]" src={imageLogo}></img>
      <h2 className=" font-bold text-gray-700">No Projects Selected</h2>
      <p className=" text-gray-300">
        Select a project or get started with a new one
      </p>
      <Button type="submit" onClick={addTask}>
        Create new project
      </Button>
    </div>
  );
}
