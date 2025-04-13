import React from "react";

const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">👤 Name: {name}</h2>
      <p className="text-gray-600">✉️ Email: {email}</p>
    </div>
  );
};

export default UserCard;
