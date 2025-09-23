import React, { useState } from 'react';

/**
 * A simple authentication form component.  It collects an email and password
 * and calls the provided `onSubmit` callback when the form is submitted.
 * Replace the onSubmit handler with your own authentication logic (e.g. Firebase Auth).
 *
 * @param {Function} onSubmit Function to call with `{ email, password }` when the form is submitted.
 */
export function AuthForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">
        Sign In
      </button>
    </form>
  );
}