import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllDepartments = ({ refresh }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/departments');
        setData(response.data.data);
      } catch (error) {
        console.error('API Error:', error);
        console.log(error.message);
      }
    };

    apiCall();
  }, [refresh]);
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">All Departments </h2>

      <div className="space-y-3">
        {data.length === 0 ? (
          <p className="text-gray-500">No Departments found.</p>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
            >
              {/* Left Section */}
              <div>
                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
              </div>

              {/* Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(item)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllDepartments;
