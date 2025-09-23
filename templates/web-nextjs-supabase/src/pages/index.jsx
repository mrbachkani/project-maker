import React from 'react';
import { Hello } from '../components/Hello';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your New App</h1>
      <Hello />
    </main>
  );
}