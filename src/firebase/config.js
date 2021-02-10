import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTRR6s9SL2yfWHHUScyc8vLOYONaca2z4",
    authDomain: "muso-ninjas-f768a.firebaseapp.com",
    projectId: "muso-ninjas-f768a",
    storageBucket: "muso-ninjas-f768a.appspot.com",
    messagingSenderId: "1015532861505",
    appId: "1:1015532861505:web:8ada2bbfa3d66a26082ec0"
  };

// init firebase
  firebase.initializeApp(firebaseConfig)

//init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

// timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, timestamp }