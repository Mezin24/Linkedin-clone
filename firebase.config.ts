import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApNz37WwzhsQc48_Zj8nIC-zjO-c5knOA',
  authDomain: 'linkedin-clone-2fc15.firebaseapp.com',
  projectId: 'linkedin-clone-2fc15',
  storageBucket: 'linkedin-clone-2fc15.appspot.com',
  messagingSenderId: '712578603440',
  appId: '1:712578603440:web:b98b27b7825127797f5e75',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
