import React , {useState} from 'react'

const AddDepartmentForm = () => {
    const [isEdit,setIsEdit] = useState(false);
    const [name, setName] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {isEdit ? "Update Department" : "Add Department"}
        </h2>

        <form  className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm mb-1">Department Name</label>
            <input
              name="name"
              placeholder="Department Name"
              className="p-2 border rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex justify-end mt-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {isEdit ? "Update Department" : "Add Department"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDepartmentForm
