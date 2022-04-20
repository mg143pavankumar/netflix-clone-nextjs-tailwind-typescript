// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRUeOK2UqC8JONat9Iirsu1tGpZCf2Gg",
  authDomain: "netflix-clone-42ace.firebaseapp.com",
  projectId: "netflix-clone-42ace",
  storageBucket: "netflix-clone-42ace.appspot.com",
  messagingSenderId: "517985069576",
  appId: "1:517985069576:web:611d8b0a40b191a3b73fbd"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
