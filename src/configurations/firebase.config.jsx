import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcfEPUVzhPhtAyrfAlbJDZ0HKz7gi21po",
  authDomain: "e-commerce-de74a.firebaseapp.com",
  databaseURL: "https://e-commerce-de74a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-commerce-de74a",
  storageBucket: "e-commerce-de74a.firebasestorage.app",
  messagingSenderId: "1072451979183",
  appId: "1:1072451979183:web:b8f8823b7797a06542d15a",
  measurementId: "G-4CVXL0KS0C"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
// const analytics = getAnalytics(app)

export { db, auth }