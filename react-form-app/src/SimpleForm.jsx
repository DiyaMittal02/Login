import React, { useState } from "react";

const SimpleForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", text);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-20">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Enter Something:
      </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
