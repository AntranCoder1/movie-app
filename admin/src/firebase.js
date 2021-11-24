import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBToZzB6aG1SKoXIxIS9onL2P3wO0cn30Q",
    authDomain: "movie-24107.firebaseapp.com",
    projectId: "movie-24107",
    storageBucket: "movie-24107.appspot.com",
    messagingSenderId: "212215262624",
    appId: "1:212215262624:web:b26c390988e9a3d390c8c5",
    measurementId: "G-8K8S3FM971"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;