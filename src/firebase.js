import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBH4kejtcVzBKEpLltD6ZAriDX8n2ZcATw",
  authDomain: "pizza-ebe4c.firebaseapp.com",
  projectId: "pizza-ebe4c",
  storageBucket: "pizza-ebe4c.appspot.com",
  messagingSenderId: "286707409077",
  appId: "1:286707409077:web:d236415a60160cc7ca1efc",
  measurementId: "G-CDTD6FSFRY",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
