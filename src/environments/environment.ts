/**
 * Configuración de Firebase para el navegador.
 *
 * IMPORTANTE: La `apiKey` es PÚBLICA (cualquiera que inspeccione el bundle la ve).
 * Firebase está diseñado así — la seguridad NO viene de la API key, viene de:
 * - Reglas de RTDB en database.rules.json (auténtica solo a tu uid)
 * - Reglas de Firestore si la usás
 * - Reglas de Storage
 * - Validación en Cloud Functions si la usás
 *
 * Nunca pongas secretos (service account keys, admin API keys, etc.) acá.
 * Ver .docs/architecture.md §13.
 */
export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyAqOJ4g5UoA4wiRq2SGwP0XSsAcVrywa38',
    authDomain: 'pandalead-b2e09.firebaseapp.com',
    databaseURL: 'https://pandalead-b2e09-default-rtdb.firebaseio.com',
    projectId: 'pandalead-b2e09',
    storageBucket: 'pandalead-b2e09.firebasestorage.app',
    messagingSenderId: '464149366466',
    appId: '1:464149366466:web:a6deddf181d59939e25d5b',
  },
};
