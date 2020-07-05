import React from "react";

function AddNote({handleClick}) {
    return (
        <button onClick={handleClick}>Добавить заметку</button>
    );
}

export default AddNote;