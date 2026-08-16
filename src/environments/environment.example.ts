// Copy this file to environment.ts and fill in your Firebase credentials from the Firebase Console.
// DO NOT commit environment.ts with real credentials — only commit environment.example.ts.
export const environment = {
  production: true,
  firebase: {
    apiKey: 'YOUR_FIREBASE_API_KEY', // Set via FIREBASE_API_KEY environment variable
    authDomain: 'your-project.firebaseapp.com',
    databaseURL: 'https://your-project-default-rtdb.firebaseio.com',
    projectId: 'your-project',
    storageBucket: 'your-project.firebasestorage.app',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  },
};
