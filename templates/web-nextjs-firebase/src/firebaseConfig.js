import { initializeApp } from 'firebase/app';

// Firebase configuration
// See .env.example for environment variables and set them in your .env file.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialise Firebase
export const firebaseApp = initializeApp(firebaseConfig);