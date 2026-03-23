import { useContext, useState } from 'react';
import { ColorContext } from '../context/ColorContext';
import useNotes from '../hooks/useNotes';
import Note from './Note';

function NoteBoard() {
  const { color } = useContext(ColorContext);
  const { notes, addNote, deleteNote } = useNotes();
  const [text, setText] = useState('');

  const handleSubmit = () => {
    addNote(text, color);
    setText('');
  };

  return (
    <div>
      <h2>Mis notas</h2>

      <input
        type="text"
        placeholder="Escribe una nota"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button onClick={handleSubmit}>Añadir nota</button>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          marginTop: '20px',
          justifyContent: 'center',
        }}
      >
        {notes.length === 0 ? (
          <p>No hay notas todavía</p>
        ) : (
          notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              color={note.color}
              deleteNote={deleteNote}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteBoard;