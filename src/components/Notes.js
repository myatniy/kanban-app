import React from "react";
import Note from "./Note";

function Notes({notes, onDelete = () => {}}) {
  const listItems = notes.map(note =>
    <Note key={note.id} value={note.task} onDelete={onDelete.bind(null, note.id)} />
  );

  return (
      <ul>
        {listItems}
      </ul>
  );
}

export default Notes;
