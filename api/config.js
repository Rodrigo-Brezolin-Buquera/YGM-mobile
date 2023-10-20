import * as firebase from 'firebase';
import { getAuth } from "firebase/auth"
import googleSservices from "../google-services.json"

if (!firebase.apps.length) {
    firebase.initializeApp(googleSservices);
}


export const auth = getAuth(app);

