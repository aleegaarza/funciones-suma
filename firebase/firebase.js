import firebaseApp from "firebase/app";
import "firebase/firestore";





import config from "./config";

firebaseApp.initializeApp(config);

export const firestore = firebaseApp.firestore();

export default firebaseApp;