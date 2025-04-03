import { useContext } from "react"
import NotesContext from "./NotesContext"

const Desk1 = () => {

    const {notes} = useContext(NotesContext)
    console.log(notes);

    return (
        <div>
            <h1>Escritorio 1</h1>
            <ul>
                {notes.map((note,index)=>(
                    
                        <li key={index}> {note} </li>
                   
                ))}
            </ul>
        </div>
    )
}

export default Desk1;

//