// import React, { useState } from 'react';

// const StickyNote = () => {
//   const [note, setNote] = useState("");

//   // Styles object (file ke andar hi)
//   const stickyStyles = {
//     container: {
//       position: 'fixed',
//       bottom: '20px',
//       right: '20px',
//       width: '250px',
//       background: 'rgba(255, 255, 255, 0.1)',
//       backdropFilter: 'blur(15px)',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//       borderRadius: '15px',
//       padding: '15px',
//       boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
//       zIndex: 1000,
//       color: 'white'
//     },
//     textarea: {
//       width: '100%',
//       height: '100px',
//       background: 'transparent',
//       border: 'none',
//       color: 'white',
//       resize: 'none',
//       outline: 'none',
//       fontSize: '14px',
//       marginTop: '10px'
//     }
//   };

//   return (
//     <div style={stickyStyles.container}>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <span style={{ fontWeight: 'bold' }}>📌 My Notes</span>
//       </div>
//       <textarea
//         placeholder="Yahan kuch likho..."
//         value={note}
//         onChange={(e) => setNote(e.target.value)}
//         style={stickyStyles.textarea}
//       />
//     </div>
//   );
// };

// // YEH HAI MAIN STEP - EXPORT KARNA! 🚀
// export default StickyNote;



// import React, { useState, useEffect } from 'react';

// const StickyNote = ({ topicName, currentVideoTime }) => {
//     const [note, setNote] = useState("");
//     const [savedNotes, setSavedNotes] = useState([]);
    
//     // Assume user_id is 1 for now (Login logic ke baad ise dynamic kar lena)
//     const userId = 1; 

//     // 1. Fetch existing notes from Backend
//     const fetchNotes = async () => {
//         try {
//             const response = await fetch(`http://127.0.0.1:5000/api/notes/${userId}`);
//             const data = await response.json();
//             setSavedNotes(data);
//         } catch (err) {
//             console.error("Notes load nahi ho paye:", err);
//         }
//     };

//     useEffect(() => {
//         fetchNotes();
//     }, []);

//     // 2. Save Note to MySQL via Flask
//     const handleSave = async () => {
//         if (!note) return alert("Kuch toh likho!");

//         const noteData = {
//             user_id: userId,
//             topic: topicName || "General",
//             note: note,
//             time: currentVideoTime || "00:00"
//         };

//         try {
//             const response = await fetch('http://127.0.0.1:5000/api/save-note', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(noteData)
//             });
//             const result = await response.json();
//             alert(result.message);
//             setNote(""); // Clear input after save
//             fetchNotes(); // Refresh list
//         } catch (err) {
//             alert("Save karne mein error aaya!");
//         }
//     };

//     // 3. Delete Note
//     const handleDelete = async (noteId) => {
//         try {
//             await fetch(`http://127.0.0.1:5000/api/delete-note/${noteId}`, {
//                 method: 'DELETE'
//             });
//             fetchNotes(); // Refresh list
//         } catch (err) {
//             console.error("Delete failed:", err);
//         }
//     };

//     return (
//         <div style={containerStyle}>
//             <h3>📝 Smart Notes ({topicName})</h3>
//             <textarea 
//                 placeholder="Write your note here..."
//                 value={note}
//                 onChange={(e) => setNote(e.target.value)}
//                 style={textareaStyle}
//             />
//             <button onClick={handleSave} style={saveBtnStyle}>Save Note</button>

//             <hr />
            
//             <h4>Previous Notes:</h4>
//             <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                 {savedNotes.map((n) => (
//                     <div key={n[0]} style={noteItemStyle}>
//                         <p><strong>[{n[3]}]</strong> {n[2]}</p>
//                         <button onClick={() => handleDelete(n[0])} style={delBtnStyle}>Delete</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// // --- STYLES ---
// const containerStyle = { position: 'fixed', bottom: '20px', right: '20px', width: '300px', background: '#fff9c4', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', zIndex: 1000, color: '#333',zIndex: '9999',left: 'auto',top: 'auto',willChange: 'transform' };
// const textareaStyle = { width: '100%', height: '80px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', padding: '5px' };
// const saveBtnStyle = { width: '100%', background: '#2ecc71', color: 'white', border: 'none', padding: '8px', cursor: 'pointer', borderRadius: '5px' };
// const noteItemStyle = { background: '#fff', padding: '8px', marginBottom: '5px', borderRadius: '5px', fontSize: '13px', display: 'flex', justifyContent: 'space-between' };
// const delBtnStyle = { background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontWeight: 'bold' };

// export default StickyNote;



// import React, { useState, useEffect } from 'react';

// const StickyNote = ({ topicName, currentVideoTime }) => {
//     const [note, setNote] = useState("");
//     const [savedNotes, setSavedNotes] = useState([]);
//     const [isOpen, setIsOpen] = useState(false); // Toggle state
//     const [stats, setStats] = useState({ xp: 0, level: 1 }); // Gamification state
    
//     const userId = 1; 

//     // 1. Fetch Notes aur Stats (XP/Level bhi fetch karenge)
//     const fetchData = async () => {
//         try {
//             const notesRes = await fetch(`http://127.0.0.1:5000/api/notes/${userId}`);
//             const notesData = await notesRes.json();
//             setSavedNotes(notesData);

//             // Level aur XP fetch karne ke liye ek alag endpoint (optional) ya login se mil sakta hai
//             // Filhal hum ise static rakh rahe hain jab tak user note save nahi karta
//         } catch (err) {
//             console.error("Data load nahi ho paye:", err);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     // 2. Save Note + XP update
//     const handleSave = async () => {
//         if (!note) return alert("Kuch toh likho!");

//         const noteData = {
//             user_id: userId,
//             topic: topicName || "General",
//             note: note,
//             time: currentVideoTime || "00:00"
//         };

//         try {
//             const response = await fetch('http://127.0.0.1:5000/api/save-note', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(noteData)
//             });
//             const result = await response.json();
            
//             if (result.status === "success") {
//                 alert(result.message);
//                 // Backend se mile naye XP/Level update karo
//                 setStats({ xp: result.xp, level: result.level });
//                 setNote(""); 
//                 fetchData(); 
//             }
//         } catch (err) {
//             alert("Save karne mein error aaya!");
//         }
//     };

//     const handleDelete = async (noteId) => {
//         try {
//             await fetch(`http://127.0.0.1:5000/api/delete-note/${noteId}`, { method: 'DELETE' });
//             fetchData();
//         } catch (err) {
//             console.error("Delete failed:", err);
//         }
//     };

//     return (
//         <>
//             {/* Toggle Button */}
//             <button onClick={() => setIsOpen(!isOpen)} style={toggleBtnStyle}>
//                 {isOpen ? '✖ Close' : `📝 Notes (Lvl ${stats.level})`}
//             </button>

//             {/* Sticky Note Box */}
//             {isOpen && (
//                 <div style={containerStyle}>
//                     <div style={xpHeaderStyle}>
//                         <span>⭐ Level {stats.level}</span>
//                         <span>{stats.xp % 100}/100 XP</span>
//                     </div>
                    
//                     {/* Progress Bar */}
//                     <div style={progressBarContainer}>
//                         <div style={{...progressBarStyle, width: `${stats.xp % 100}%`}}></div>
//                     </div>

//                     <h3 style={{marginTop: '10px'}}>📝 Smart Notes</h3>
//                     <textarea 
//                         placeholder="Write your note here..."
//                         value={note}
//                         onChange={(e) => setNote(e.target.value)}
//                         style={textareaStyle}
//                     />
//                     <button onClick={handleSave} style={saveBtnStyle}>Save & Earn +20 XP</button>

//                     <hr />
                    
//                     <h4>Previous Notes:</h4>
//                     <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
//                         {savedNotes.map((n) => (
//                             <div key={n[0]} style={noteItemStyle}>
//                                 <div style={{maxWidth: '80%'}}>
//                                     <small style={{color: '#666'}}>[{n[3]}] - {n[1]}</small>
//                                     <p style={{margin: '2px 0'}}>{n[2]}</p>
//                                 </div>
//                                 <button onClick={() => handleDelete(n[0])} style={delBtnStyle}>🗑️</button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// // --- UPDATED STYLES ---

// const toggleBtnStyle = {
//     position: 'fixed', bottom: '20px', right: '20px',
//     padding: '12px 20px', borderRadius: '50px', background: '#f1c40f',
//     border: 'none', cursor: 'pointer', fontWeight: 'bold', zIndex: 10001,
//     boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
// };

// const containerStyle = { 
//     position: 'fixed', bottom: '85px', right: '20px', width: '320px', 
//     background: '#fff9c4', padding: '15px', borderRadius: '15px', 
//     boxShadow: '0 10px 30px rgba(0,0,0,0.4)', zIndex: 10000, color: '#333' 
// };

// const xpHeaderStyle = { display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' };
// const progressBarContainer = { width: '100%', height: '10px', background: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' };
// const progressBarStyle = { height: '100%', background: '#2ecc71', transition: 'width 0.4s ease' };

// const textareaStyle = { width: '100%', height: '80px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #d4c86a', padding: '8px', background: 'rgba(255,255,255,0.5)' };
// const saveBtnStyle = { width: '100%', background: '#27ae60', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '8px', fontWeight: 'bold' };
// const noteItemStyle = { background: 'rgba(255,255,255,0.7)', padding: '10px', marginBottom: '8px', borderRadius: '10px', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
// const delBtnStyle = { background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', fontSize: '16px' };

// export default StickyNote;




// import React, { useState, useEffect } from 'react';
// import confetti from 'canvas-confetti'; // Confetti import karo

// const StickyNote = ({ topicName, currentVideoTime }) => {
//     const [note, setNote] = useState("");
//     const [savedNotes, setSavedNotes] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
    
//     // XP aur Level ke liye state (Default values set kardi hain)
//     const [stats, setStats] = useState({ xp: 0, level: 1 });

//     const userId = 1; 

//     const fetchNotes = async () => {
//         try {
//             const response = await fetch(`http://127.0.0.1:5000/api/notes/${userId}`);
//             const data = await response.json();
//             setSavedNotes(data);
//         } catch (err) {
//             console.error("Notes load nahi ho paye:", err);
//         }
//     };

//     useEffect(() => {
//         fetchNotes();
//     }, []);

//     const handleSave = async () => {
//         if (!note) return alert("Kuch toh likho!");

//         const noteData = {
//             user_id: userId,
//             topic: topicName || "General",
//             note: note,
//             time: currentVideoTime || "00:00"
//         };

//         try {
//             const response = await fetch('http://127.0.0.1:5000/api/save-note', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(noteData)
//             });
//             const result = await response.json();
            
//             if (result.status === "success") {
//                 // --- REWARD POPUP LOGIC ---
//                 confetti({
//                     particleCount: 150,
//                     spread: 70,
//                     origin: { y: 0.8 },
//                     colors: ['#f1c40f', '#2ecc71', '#ffffff']
//                 });

//                 // Stats update (Result se XP aur Level uthao)
//                 setStats({
//                     xp: Number(result.xp),
//                     level: Number(result.level)
//                 });

//                 setNote(""); 
//                 fetchNotes(); 
//             }
//         } catch (err) {
//             alert("Save karne mein error aaya!");
//         }
//     };

//     const handleDelete = async (noteId) => {
//         try {
//             await fetch(`http://127.0.0.1:5000/api/delete-note/${noteId}`, { method: 'DELETE' });
//             fetchNotes();
//         } catch (err) {
//             console.error("Delete failed:", err);
//         }
//     };

//     return (
//         <>
//             {/* Toggle Button */}
//             <button onClick={() => setIsOpen(!isOpen)} style={toggleBtnStyle}>
//                 {isOpen ? '✖' : `📝 Lvl ${stats.level}`}
//             </button>

//             {isOpen && (
//                 <div style={containerStyle}>
//                     {/* XP Progress Bar UI */}
//                     <div style={xpHeaderStyle}>
//                         <span>⭐ Level {stats.level}</span>
//                         <span>{stats.xp % 100}/100 XP</span>
//                     </div>
//                     <div style={progressBarContainer}>
//                         <div style={{...progressBarStyle, width: `${stats.xp % 100}%`}}></div>
//                     </div>

//                     <h3 style={{margin: '10px 0'}}>Smart Notes ({topicName})</h3>
//                     <textarea 
//                         placeholder="Write your note here..."
//                         value={note}
//                         onChange={(e) => setNote(e.target.value)}
//                         style={textareaStyle}
//                     />
//                     <button onClick={handleSave} style={saveBtnStyle}>Save & Earn +20 XP</button>

//                     <hr />
                    
//                     <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
//                         {savedNotes.map((n) => (
//                             <div key={n[0]} style={noteItemStyle}>
//                                 <p style={{margin: 0}}><strong>[{n[3]}]</strong> {n[2]}</p>
//                                 <button onClick={() => handleDelete(n[0])} style={delBtnStyle}>🗑️</button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// // --- STYLES ---
// const toggleBtnStyle = { position: 'fixed', bottom: '20px', right: '20px', padding: '15px', borderRadius: '50%', background: '#f1c40f', border: 'none', cursor: 'pointer', zIndex: 10001, fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' };
// const containerStyle = { position: 'fixed', bottom: '90px', right: '20px', width: '300px', background: '#fff9c4', padding: '15px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 10000 };
// const xpHeaderStyle = { display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold' };
// const progressBarContainer = { width: '100%', height: '8px', background: '#e0e0e0', borderRadius: '10px', marginTop: '5px', overflow: 'hidden' };
// const progressBarStyle = { height: '100%', background: '#2ecc71', transition: 'width 0.5s ease-in-out' };
// const textareaStyle = { width: '100%', height: '80px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ccc', padding: '8px' };
// const saveBtnStyle = { width: '100%', background: '#27ae60', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '8px', fontWeight: 'bold' };
// const noteItemStyle = { background: '#fff', padding: '8px', marginBottom: '5px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '13px' };
// const delBtnStyle = { background: 'none', border: 'none', color: 'red', cursor: 'pointer' };

// export default StickyNote;





import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const StickyNote = ({ topicName, currentVideoTime }) => {
    const [note, setNote] = useState("");
    const [savedNotes, setSavedNotes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [stats, setStats] = useState({ xp: 0, level: 1 });

    const userId = 1; 

    // --- 1. Fetch Notes & Initial Stats ---
    // const fetchNotes = async () => {
    //     try {
    //         // Note: Updated the URL to a more standard notes fetch route
    //         const response = await fetch(`http://127.0.0.1:5000/api/notes/${userId}`);
    //         if (!response.ok) throw new Error("Failed to fetch");
    //         const data = await response.json();
    //         setSavedNotes(data);
    //     } catch (err) {
    //         console.error("Notes load nahi ho paye:", err);
    //     }
    // };
    const fetchNotes = async () => {
    try {
        // userId ke saath koi extra symbol mat lagaiye
        const response = await fetch(`http://127.0.0.1:5000/api/notes/${userId}`);
        const data = await response.json();
        setSavedNotes(data);
    } catch (err) {
        console.error("Fetch error:", err);
    }
};

    useEffect(() => {
        fetchNotes();
        // You might want a separate API to fetch initial XP/Level on load
    }, []);

    // --- 2. Save Note & Trigger Rewards ---
    const handleSave = async () => {
        if (!note.trim()) return alert("Kuch toh likho!");

        const noteData = {
            user_id: userId,
            topic: topicName || "General",
            note: note,
            time: currentVideoTime || "00:00"
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/save-note', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(noteData)
            });
            
            const result = await response.json();
            
            if (result.status === "success") {
                // 🎉 Trigger Confetti
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.8 },
                    colors: ['#f1c40f', '#2ecc71', '#ffffff']
                });

                // Check for Level Up
                if (Number(result.level) > stats.level) {
                    alert(`🎊 LEVEL UP! You are now Level ${result.level}`);
                }

                // Update Stats from Server Response
                setStats({
                    xp: Number(result.xp),
                    level: Number(result.level)
                });

                setNote(""); 
                fetchNotes(); 
            } else {
                alert("Server Error: " + result.message);
            }
        } catch (err) {
            console.error("Save error:", err);
            alert("Connection error! Check if Flask is running.");
        }
    };

    const handleDelete = async (noteId) => {
        if(!window.confirm("Delete this note?")) return;
        try {
            await fetch(`http://127.0.0.1:5000/api/delete-note/${noteId}`, { method: 'DELETE' });
            fetchNotes();
        } catch (err) {
            console.error("Delete failed:", err);
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} style={toggleBtnStyle}>
                {isOpen ? '✖' : `📝 Lvl ${stats.level}`}
            </button>

            {isOpen && (
                <div style={containerStyle}>
                    <div style={xpHeaderStyle}>
                        <span>⭐ Level {stats.level}</span>
                        <span>{stats.xp % 100}/100 XP</span>
                    </div>
                    <div style={progressBarContainer}>
                        <div style={{...progressBarStyle, width: `${stats.xp % 100}%`}}></div>
                    </div>

                    <h3 style={{margin: '10px 0', fontSize: '16px'}}>Smart Notes</h3>
                    <p style={{fontSize: '11px', color: '#666'}}>Topic: {topicName || "General"}</p>
                    
                    <textarea 
                        placeholder="Write your note here..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        style={textareaStyle}
                    />
                    <button onClick={handleSave} style={saveBtnStyle}>
                        Save & Earn +20 XP
                    </button>

                    {/* <div style={notesListContainer}>
                        {savedNotes.length === 0 ? <p style={{fontSize: '12px', textAlign: 'center'}}>No notes yet.</p> : 
                        savedNotes.map((n) => (
                            <div key={n[0]} style={noteItemStyle}>
                                <div style={{flex: 1}}>
                                    <small style={{color: '#27ae60'}}>{n[3]}</small>
                                    <p style={{margin: 0}}>{n[2]}</p>
                                </div>
                                <button onClick={() => handleDelete(n[0])} style={delBtnStyle}>🗑️</button>
                            </div>
                        ))}
                    </div> */}
                    <div style={notesListContainer}>
    {savedNotes.length === 0 ? (
        <p style={{fontSize: '12px', textAlign: 'center'}}>No notes yet.</p>
    ) : (
        savedNotes.map((n) => (
            <div key={n.id} style={noteItemStyle}> {/* n[0] ki jagah n.id */}
                <div style={{flex: 1}}>
                    {/* n[3] ki jagah n.video_timestamp */}
                    <small style={{color: '#27ae60'}}>[{n.video_timestamp}] </small>
                    {/* n[2] ki jagah n.note_content */}
                    <p style={{margin: 0}}>{n.note_content}</p>
                </div>
                <button onClick={() => handleDelete(n.id)} style={delBtnStyle}>🗑️</button>
            </div>
        ))
    )}
</div>
                </div>
            )}
        </>
    );
};

// --- STYLES (Minor cleanups for better UI) ---
const toggleBtnStyle = { position: 'fixed', bottom: '20px', right: '20px', padding: '15px', borderRadius: '50%', background: '#f1c40f', border: 'none', cursor: 'pointer', zIndex: 10001, fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' };
const containerStyle = { position: 'fixed', bottom: '90px', right: '20px', width: '320px', background: '#fff9c4', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 10000, border: '1px solid #f1c40f' };
const xpHeaderStyle = { display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold', color: '#444' };
const progressBarContainer = { width: '100%', height: '10px', background: '#e0e0e0', borderRadius: '10px', marginTop: '5px', overflow: 'hidden', border: '1px solid #ddd' };
const progressBarStyle = { height: '100%', background: 'linear-gradient(90deg, #2ecc71, #27ae60)', transition: 'width 0.5s ease-in-out' };
const textareaStyle = { width: '100%', height: '80px', margin: '10px 0', borderRadius: '8px', border: '1px solid #dec910', padding: '10px', fontSize: '14px', outline: 'none' };
const saveBtnStyle = { width: '100%', background: '#27ae60', color: 'white', border: 'none', padding: '12px', cursor: 'pointer', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' };
const notesListContainer = { maxHeight: '180px', overflowY: 'auto', marginTop: '15px', borderTop: '1px solid #ebd671', paddingTop: '10px' };
const noteItemStyle = { background: '#fff', padding: '10px', marginBottom: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '13px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' };
const delBtnStyle = { background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', padding: '0 5px', fontSize: '16px' };

export default StickyNote;