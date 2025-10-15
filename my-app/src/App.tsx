import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

useEffect(() => {
  axios.get<User[]>("http://127.0.0.1:5000/api/users") // ⚠️ gamit ang 127.0.0.1
    .then(res => setUsers(res.data))
    .catch(err => console.error("Axios Error:", err));
}, []);

  return (
    <div className="p-6 text-center max-w-2xl mx-auto">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">
        <span className="text-orange-500">Data</span>
        <span className="text-stone-950">Management</span>
      </h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-5 border text-stone-950 rounded shadow">
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;