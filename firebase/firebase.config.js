import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBMKOSBSINt6nBUiaBWHRNVsdrGyPvt-gY",
    authDomain: "websupplementmoneyment.firebaseapp.com",
    projectId: "websupplementmoneyment",
    storageBucket: "websupplementmoneyment.appspot.com",
    messagingSenderId: "69359821128",
    appId: "1:69359821128:web:96cf1432558c87b4ff137d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)