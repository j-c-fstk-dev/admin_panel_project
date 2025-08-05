import admin from 'firebase-admin';

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\n/g, '\n');

if (!privateKey) {
    throw new Error('Firebase private key is not defined in environment variables');
}

const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: privateKey,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

console.log('Firebase Admin SDK initialized!');

export default admin;
