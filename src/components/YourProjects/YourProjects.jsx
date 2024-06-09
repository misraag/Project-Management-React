import { useState } from "react"

export default function YourProjects({...props}) {
    const [listOfProjects, setListOfProjects] = useState([]);
    
    return (
        <div {...props}>
            <h1>Your Projects</h1>
        </div>
    )
}