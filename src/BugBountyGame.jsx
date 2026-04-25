import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios

const BugBountyGame = () => {
    const [timeLeft, setTimeLeft] = useState(15);
    const [gameOver, setGameOver] = useState(false);

    // Timer Logic
    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            alert("System Crashed! 💥");
            window.location.reload();
        }
    }, [timeLeft, gameOver]);

    const handleSolve = async () => {
        setGameOver(true);
        alert("Correct! +50 XP Earned 🏆");

        try {
            // Flask API ko call karna
            await axios.post('http://localhost:5000/save-xp', {
                points: 50,
                user_id: localStorage.getItem('userId') // Agar aapne ID store ki hai
            });
            window.location.href = "/dashboard"; // Success ke baad redirect
        } catch (err) {
            console.error("Error saving XP", err);
        }
    };

    const handleWrong = () => {
        alert("Wrong Fix! -5 Seconds ⚠️");
        setTimeLeft(timeLeft - 5);
    };

    return (
        <div style={{ textAlign: 'center', backgroundColor: '#1a1a1a', color: '#00ff00', padding: '50px', borderRadius: '15px' }}>
            <h1>👾 MISSION: DEBUG THE SYSTEM</h1>
            <h2 style={{ color: 'red' }}>Time Left: {timeLeft}s</h2>

            <div style={{ backgroundColor: '#000', padding: '20px', textAlign: 'left', margin: '20px auto', width: '60%', border: '1px solid #00ff00' }}>
                <pre>
                    <code>
                        {`def calculate_total(price):
    # Error: Can't add string to int
    tax = price * "0.18" 
    return price + tax`}
                    </code>
                </pre>
            </div>

            <button onClick={handleWrong} style={buttonStyle}>Change price to total</button>
            <button onClick={handleSolve} style={buttonStyle}>Remove quotes from "0.18"</button>
            <button onClick={handleWrong} style={buttonStyle}>Add a semicolon</button>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#0ff',
    border: '1px solid #0ff'
};

export default BugBountyGame;