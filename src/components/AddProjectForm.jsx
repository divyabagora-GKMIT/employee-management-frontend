import React , {useState} from 'react'

const AddProjectForm = () => {
  const [form, setForm] = useState({
    name: "",
    start_date: "",
    end_date: "",
    status: "Pending",
  });

  const [isEdit, setIsEdit] = useState(true);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {isEdit ? "Update Project" : "Add Project"}
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm mb-1">Project Name</label>
            <input
              name="name"
              placeholder="Project Name"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Start Date</label>
            <input
              name="start_date"
              type="date"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">End Date</label>
            <input
              name="end_date"
              type="date"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Status</label>
            <select
              name="status"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Hold">Hold</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex justify-end mt-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {isEdit ? "Update Project" : "Add project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProjectForm
