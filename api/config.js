import * as firebase from 'firebase';
import { getAuth } from "firebase/auth"
import googleSservices from "../google-services.json"





firebase.initializeApp(firebaseConfig);


export const auth = getAuth(app);

