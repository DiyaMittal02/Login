import React, { useState } from "react";

const LiveTextDisplay = () => {
  // Declare state for the input field
  const [text, setText] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setText(e.target.value); // Update the state with the input value
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <label className="block text-gray-700 text-sm font-bold mb-2">Type something:</label>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <div className="mt-2 text-gray-800">
        <p>You typed: {text}</p>
      </div>
    </div>
  );
};

export default LiveTextDisplay;
