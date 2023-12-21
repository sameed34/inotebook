import React, { useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/Notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { note, addNote } = context;

  const [Note, setNote] = useState({ title: "", description: "", tag: "" });
  const adding = (e) => {
    e.preventDefault();
    console.log("adding");
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3 ">
        <h3>Add Note: </h3>
        <form>
          <div className="mb-3">
          <div id="emailHelp" className="form-text">
              We'll never share your information with anyone else.
            </div>
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => adding(e)}
          >
            Add Note
          </button>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default AddNote;
