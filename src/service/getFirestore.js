import firebase from 'firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBnoFfSGgHx3OJcahjO6plmGoNVSrMRAh8",
  authDomain: "icaro-7b9ee.firebaseapp.com",
  projectId: "icaro-7b9ee",
  storageBucket: "icaro-7b9ee.appspot.com",
  messagingSenderId: "185286146568",  
  appId: "1:185286146568:web:7422543b693379a692afbd",
  measurementId: "G-4N74S96WCH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){    
    return firebase.firestore(app)
}
