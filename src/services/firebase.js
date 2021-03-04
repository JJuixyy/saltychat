import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD7NIBX4xhaxIAG2gmFCvma6HvIYAoglrQ",
    authDomain: "saltychat-c0408.firebaseapp.com",
    projectId: "saltychat-c0408",
    storageBucket: "saltychat-c0408.appspot.com",
    messagingSenderId: "627013760240",
    appId: "1:627013760240:web:6701cd762ea3ec2d98fe35"
  };

  firebase.initializeApp(config);

  export default firebase;
  export const auth = firebase.auth;
  export const db = firebase.firestore();