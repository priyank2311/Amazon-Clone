import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaZkG9SXsIP6EDs-Q21Hlk9GPta1zMezQ",
    authDomain: "clone-1beff.firebaseapp.com",
    projectId: "clone-1beff",
    storageBucket: "clone-1beff.appspot.com",
    messagingSenderId: "844526622260",
    appId: "1:844526622260:web:c86fb5f48811ae72f61c61",
    measurementId: "G-CD12PRP23T"
});

//const db = firebase.firestore();
const auth = firebase.auth();

export { auth };