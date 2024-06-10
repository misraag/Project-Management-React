import { useRef } from "react"

export default function AddTask({clickCancel, clickSave, ...props}) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleFormSubmit(event) {
        console.log("Form Is Submitted")
        event.preventDefault();

        const newTask = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value
          };
          clickSave(newTask);
    }
    

    return (
        <form {...props} className="mt-4 text-left w-[50vw]" onSubmit={handleFormSubmit}>
            <menu className="flex items-center justify-end gap-4 my-4">
                <button onClick={clickCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button type="submit" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
            
            <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
            <input type="text" ref={title} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
            
            <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
            <input type="text" ref={description} className="w-full h-[100px] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
            
            <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
            <input type="date" ref={dueDate} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
        </form>
    )
}