import React ,{useState} from 'react';

const CreateUserForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    designation: '',
    phone: '',
    address: '',
    date_of_birth: '',
    gender: '',
    joining_date: '',
    role: 'User',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              name="name"
              placeholder="Name"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              placeholder="Email"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              name="password"
              placeholder="Password"
              type="password"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Designation</label>
            <input
              name="designation"
              placeholder="Designation"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              name="phone"
              placeholder="Phone"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              name="address"
              placeholder="Address"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Date of Birth</label>
            <input
              name="date_of_birth"
              type="date"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Gender</label>
            <select name="gender" className="p-2 border rounded w-full" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Joining Date</label>
            <input
              name="joining_date"
              type="date"
              className="p-2 border rounded w-full"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Role</label>
            <select name="role" className="p-2 border rounded w-full" onChange={handleChange}>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="HR">HR</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-end mt-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
