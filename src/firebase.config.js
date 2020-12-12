const firebase = require("firebase/app");


let firebaseConfig = {
    apiKey: "AIzaSyB94fLsYRSF5WnyE7GsuK5jBkw4yD9EmhQ",
    authDomain: "hosting-f2fd1.firebaseapp.com",
    databaseURL: "https://hosting-f2fd1.firebaseio.com",
    projectId: "hosting-f2fd1",
    storageBucket: "hosting-f2fd1.appspot.com",
    messagingSenderId: "174602450456",
    appId: "1:174602450456:web:1825c00b5efe4200f5f56d",
    measurementId: "G-JZR0N44YVL"
};

firebase.initializeApp(firebaseConfig);
const firebaseUi = require('firebaseui');

let ui = new firebaseUi.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }
    ],

});
