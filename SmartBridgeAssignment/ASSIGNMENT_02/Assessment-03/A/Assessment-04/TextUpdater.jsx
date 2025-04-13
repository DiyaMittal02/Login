// src/TextUpdater.js
import React, { useState } from 'react';

function TextUpdater() {
    // Declare a state variable for the text
    const [text, setText] = useState('');

    // Handle the change event when the user types
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="text-updater">
            <h1>Text Updater</h1>
            {/* Input field to type the text */}
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
                className="p-2 border rounded-md"
            />
            {/* Display the text as the user types */}
            <p>You typed: {text}</p>
        </div>
    );
}

export default TextUpdater;
