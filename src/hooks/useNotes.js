import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useNotes() {
  const [notes, setNotes] = useState([]);

  const addNote = (text, color) => {
    if (text.trim() === '') return;

    const newNote = {
      id: uuidv4(),
      text: text,
      color: color,
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return { notes, addNote, deleteNote };
}

export default useNotes;