import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBHKkt89VCweTPpDrk-g3Pp77xCior27vQ",
    authDomain: "sylla-quiz.firebaseapp.com",
    projectId: "sylla-quiz",
    storageBucket: "sylla-quiz.appspot.com",
    messagingSenderId: "193287344236",
    appId: "1:193287344236:web:9d8238acf330750825c849"
};


class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    // Inscription
    signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    //Connexion
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    //Déconnexion
    signoutUser = () => this.auth.signOut()

    //Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    user = uid => this.db.doc(`users/${uid}`);

}

export default Firebase;