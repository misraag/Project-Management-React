import imageLogo from '../../assets/no-projects.png';

export default function Main({addTask, ...props}) {
    return (
        <div {...props} className="flex flex-col w-[50vw] bg-blue-400 text-center justify-center items-center space-y-5">
            <img className="h-[60px] w-[60px]" src={imageLogo}></img>
            <h2 className=' font-bold text-gray-700'>No Projects Selected</h2>
            <p className=' text-gray-300'>Select a project or get started with a new one</p>
            <button type='submit' onClick={addTask} className='className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"'>Create new project</button>
        </div>
    )
}