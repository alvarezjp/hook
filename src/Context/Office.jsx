import Desk1 from "./Desk1";
import Desk2 from "./Desk2";
import NotesContext from "./NotesContext";
import { useState } from "react";

const Office = () => {
    const [notes , setNotes] = useState(["hola","dos"])
    const addNotes = (newNote) =>{
        setNotes([...notes,newNote]);
    }
    
    return(
        <NotesContext.Provider value={{ addNotes,notes }}>
            <h1>Provando el Context</h1>
            <Desk1/>
            <Desk2/>
        </NotesContext.Provider>
    )
}

export default Office;