import React from 'react'
import { useContext, useRef, useState } from 'react';
import NoteContext from '../context/Notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useEffect } from 'react';

const Note = () => {

    const context = useContext(NoteContext);
    const { note, getNotes, editNote } = context
    console.log("Note:-",note)

  const [mNote, setmNote] = useState({id: "", etitle: "", edescription: "", etag: "" });
  

    useEffect(() => {
       console.log("Effect")
       getNotes();
    },[]);

   const ref = useRef(null);
   const closeRef = useRef(null);


   const updateNote=(currNote)=>{
    console.log("clicked")
    ref.current.click();
    setmNote({id: currNote._id, etitle: currNote.title, edescription: currNote.description , etag: currNote.tag })
   }
   const adding = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle,note.edescription,note.etag)

  };
  const onChange = (e) => {
     setmNote({ ...mNote, [e.target.name]: e.target.value });
  };

  return (
    <div>
         <AddNote/> 
<button type="button" className="visually-hidden" data-bs-toggle="modal" style={{display: ''}}ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
          <div className="mb-3">
            <label htmlFor="etitle" className="form-label" >
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your information with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="edescription"
              name="edescription"
              value={note.description}

              onChange={onChange}
            />
             <label htmlFor="Tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
          
          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={adding}>Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div className="container">
      <h3>Your Notes: </h3>
      
           {note.map((note)=>{
            console.log("Notes: " + note)
              return <Noteitem note={note} key={note._id} updateNote={updateNote} />
         })}
        </div>
      
    </div>
  )
}

export default Note
