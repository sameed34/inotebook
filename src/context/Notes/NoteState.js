import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";
import { json } from "react-router-dom";

const host = "http://localhost:3001";
const NoteState = (props) => {
  const NotesInitial = []
  const [note, setNote] = useState(NotesInitial);
  

  const addNote = async (title, description, tag) => {
    try {
      console.log("Reached")

      const response = await fetch(`${host}/api/addNote/addnote`, {
        
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
         "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MjJmYzVhZjliY2ZjMTBhOThmMjk0In0sImlhdCI6MTY5OTg4NDk5N30.Yl_ef-vswCrrp-WeOqVpnv56sbAVWLjUsI1ddy2j0BM"
        },
        body: JSON.stringify(title, description, tag)
      })
      const data= await response.json();
      console.log("Reached")
      console.log(data);
    } catch (error) {
      console.log(error)
    }
      
     
  };

  const deleteNote = async (id) => {
    console.log("Id:-",id)
    const response = await fetch(`${host}/api/deleteNode/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MjJmYzVhZjliY2ZjMTBhOThmMjk0In0sImlhdCI6MTY5OTg4NDk5N30.Yl_ef-vswCrrp-WeOqVpnv56sbAVWLjUsI1ddy2j0BM",
      },
    });
    const data = await response.json();
    console.log(data)
    
  }
  
   const editNote = async (id, title, description, tag) => {
     const response = await fetch(`${host}/api/updateNode/update/${id}`, {
       method: "PUT",
       headers: {
         "Content-Type": "application/json",
         "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MjJmYzVhZjliY2ZjMTBhOThmMjk0In0sImlhdCI6MTY5OTg4NDk5N30.Yl_ef-vswCrrp-WeOqVpnv56sbAVWLjUsI1ddy2j0BM",
       },
       body: JSON.stringify( title, description, tag ),

     });
     const json = response.json();

     for (let index = 0; index < note.length; index++) {
       const element = note[index];
       if (element._id === id) {
         element.title = title;
         element.description = description;
         element.tag = tag;
       }
     }
   };

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchNotes`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
           
          "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2ZWZiYjA2NTY1NmQzMGM5MmI5NTE1In0sImlhdCI6MTcwMTc3MjIwOH0.D94njl_bSvAeI-d1-o2hC5aseYybn_fc-0O8IEQSqWs",
        }
        
      });
      const data = await response.json();
      
      setNote(data)
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <NoteContext.Provider
      value={{ note, setNote, addNote, deleteNote, getNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
