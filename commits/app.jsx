import React, { useEffect } from "react";
import { firestore } from "../firebase/firebase";

import "./index.css"



export default function App() {
    return (
        <h1>Hello world</h1>
    )
}


useEffect(() => {
    fireStore.collection("tweets").get()
    .then((snapshot) => {
        snapshot.forEach(doc => {
            console.warn(doc.data());
        })
    } );
}, []);