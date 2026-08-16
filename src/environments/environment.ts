export const environment = {
  production: true,
  firebase: {
    apiKey: process.env['FIREBASE_API_KEY'] || '',
    authDomain: 'pandalead-b2e09.firebaseapp.com',
    databaseURL: 'https://pandalead-b2e09-default-rtdb.firebaseio.com',
    projectId: 'pandalead-b2e09',
    storageBucket: 'pandalead-b2e09.firebasestorage.app',
    messagingSenderId: '464149366466',
    appId: '1:464149366466:web:a6deddf181d59939e25d5b',
  },
};
