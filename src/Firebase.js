import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDz1XqjACnDsOGBhToawXfd36PFj4inccw",
    authDomain: "linkedin-clone-92efb.firebaseapp.com",
    projectId: "linkedin-clone-92efb",
    storageBucket: "linkedin-clone-92efb.appspot.com",
    messagingSenderId: "734481141755",
    appId: "1:734481141755:web:c9a91ffebe7ef634ae055e"
};

// Use this to initialize the firebase App
const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);



