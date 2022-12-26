import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEmaNa7vqzpZSqH6Kz_tZo2KUah_4ViEQ",
  authDomain: "linkedin-clone-1f61c.firebaseapp.com",
  projectId: "linkedin-clone-1f61c",
  storageBucket: "linkedin-clone-1f61c.appspot.com",
  messagingSenderId: "227053418233",
  appId: "1:227053418233:web:c0ef670200559c71d19428"
};

// export const app = initializeApp(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig)
// export const db = initializeFirestore(app)
// export const db = firebase.initializeFirestore(app)
export const db = app.firestore()

export const auth = firebase.auth()
