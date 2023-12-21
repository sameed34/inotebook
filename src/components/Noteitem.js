import React from 'react'
import NoteContext from '../context/Notes/NoteContext';
import { useContext } from 'react';


const Noteitem = (props) => {
const {note, updateNote} = props
const context = useContext(NoteContext);
    const { deleteNote,  }=context
    
    const click=()=>{
        console.log(typeof updateNote)
        if(typeof updateNote === 'function'){
      updateNote(note)
        }
    }
   
  return (
    <div> 
       <div className="col-md-4" style={{ width: '18rem' }}>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-inline-flex" >
          <p><i className="fa-solid fa-trash" style={{marginRight: "20px", cursor: "pointer"}} onClick={()=>{deleteNote(note._id)}}></i></p>
          <i className="fa-regular fa-pen-to-square" style={{marginTop: "5px", cursor: "pointer"}} onClick={click}></i>
          </div>
        </div>
      </div>
    </div>
</div>
    
  )
}
  

export default Noteitem

