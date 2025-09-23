import React, { useEffect, useState } from 'react';

/**
 * Example component that will fetch data from the 'users' collection.
 * Annotate with @fetch:users so the Project Maker knows to bind this
 * component to the backend.  The bind-backend script will insert
 * placeholder code for you to replace with real data fetching logic.
 */
// @fetch:users (backend: firestore.collection("users"))
export function Hello() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Placeholder effect: this will be replaced by the bind-backend script.
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Users</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}