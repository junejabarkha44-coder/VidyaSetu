import React, { useEffect, useState } from "react";
import "./Newl.css";

const API = "http://127.0.0.1:5000";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [topic, setTopic] = useState("");
  

  const userId = 1; // later replace with logged-in user

  // 🔹 Load Notes
  const loadNotes = () => {
    fetch(`${API}/api/notes/${userId}`)
      .then(res => res.json())
      .then(data => setNotes(data));
  };

  // 🔹 Save Note
  const saveNote = () => {
    fetch(`${API}/api/save-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        topic: topic,
        note: note,
        time: "00:30"
      })
    }).then(() => {
      setNote("");
      loadNotes();
    });
  };

  // 🔹 Delete Note
 const deleteNote = (id) => {
  console.log("Deleting ID:", id); // 👈 debug

  fetch(`${API}/api/delete-note/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => {
      console.log("Response:", data); // 👈 debug
      loadNotes(); // refresh list
    })
    .catch(err => console.error("Error:", err));
};

  return (
    <div clasName="help">
    <div className="notes-container">
      <h2>📝 My Notes</h2>

      <input
        type="text"
        placeholder="Enter topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <textarea
        placeholder="Write your notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={saveNote}>Save Note</button>

      <div className="notes-list">
        {notes.map((n) => (
          <div key={n.id} className="note-item">
            <b>{n.topic_name}</b>
            <p>{n.note_content}</p>
            <small>⏱ {n.video_timestamp}</small><br/>
            <small>{n.created_at}</small><br/>

            <button onClick={() => deleteNote(n.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Notes;