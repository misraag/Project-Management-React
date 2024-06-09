export default function AddTask({clickCancel, clickSave, ...props}) {
    return (
        <form {...props} className="mt-4 text-left w-[50vw]">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button onClick={clickCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button onClick={clickSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
            
            <label className="text-sm font-bold uppercase text-stone-500">TITLE</label>
            <input type="text" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
            <label className="text-sm font-bold uppercase text-stone-500">DESCRIPTION</label>
            <input type="text" className="w-full h-[100px] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
            <label className="text-sm font-bold uppercase text-stone-500">DUE DATE</label>
            <input type="date" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
        </form>
    )
}