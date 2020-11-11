import React, { Component } from 'react';
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCwnejm4iCDxMFiobX03cG4YkYf0jm3ktM",
    authDomain: "react-crud-ffe2d.firebaseapp.com",
    databaseURL: "https://react-crud-ffe2d.firebaseio.com",
    projectId: "react-crud-ffe2d",
    storageBucket: "react-crud-ffe2d.appspot.com",
    messagingSenderId: "91040041643",
    appId: "1:91040041643:web:4437ed7c28f714455a45ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 