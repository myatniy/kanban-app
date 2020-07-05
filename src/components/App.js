import React from "react";
import Notes from "./Notes";
import AddNote from "./ButtonAddNote";

import {v4 as uuidv4} from "uuid";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuidv4(),
                    task: 'Learn React'
                },
                {
                    id: uuidv4(),
                    task: 'Do laundry'
                }
            ]
        };
    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuidv4(),
                task: "New task"
            }])
        });
    }

    deleteNote = (id, e) => {
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    render() {
        const {notes} = this.state;

        return (
            <>
                <AddNote handleClick={this.addNote} />
                <Notes notes={notes} onDelete={this.deleteNote} />
            </>
        )
    }
}

export default App;