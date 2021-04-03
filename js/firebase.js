let firebaseConfig = {
    apiKey: "AIzaSyCkzbyb9ZR58SH98yAYVPgPNXjCGqtn3ps",
    authDomain: "si-perfil-socioeconomico.firebaseapp.com",
    projectId: "si-perfil-socioeconomico",
    storageBucket: "si-perfil-socioeconomico.appspot.com",
    messagingSenderId: "993390061825",
    appId: "1:993390061825:web:409d03991135f9ebdd1300"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();