import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: processs.env.REACT_APP_API_KEY,
  authDomain: "webshop-e1f37.firebaseapp.com",
  projectId: "webshop-e1f37",
  storageBucket: "webshop-e1f37.appspot.com",
  messagingSenderId: "847741023900",
  appId: "1:847741023900:web:cfda09afc65be0083e9f59"
};

initializeApp(firebaseConfig);

const db = getFireStore()

export { db }