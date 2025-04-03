import { useContext } from "react"
import NotesContext from "./NotesContext"

const Desk2 = () => {

    const {addNotes} = useContext(NotesContext)

    return (
        <div>
            <h1>escritorio 2</h1>
            <button onClick={()=>addNotes("Esta es una nueva Nota")}>Agregar nota</button>
        </div>
    )
}

export default Desk2;