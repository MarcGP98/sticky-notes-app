function Note({ id, text, color, deleteNote }) {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: '20px',
        borderRadius: '10px',
        width: '200px',
        minHeight: '120px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <p>{text}</p>
      <button onClick={() => deleteNote(id)}>Eliminar</button>
    </div>
  );
}

export default Note;