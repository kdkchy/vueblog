import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6h24150dcwbX9iLK1h9-MAofp2NW_ltA",
    authDomain: "vueblog-73e1b.firebaseapp.com",
    projectId: "vueblog-73e1b",
    storageBucket: "vueblog-73e1b.appspot.com",
    messagingSenderId: "153501878675",
    appId: "1:153501878675:web:0cb4c0fc4e59ad006f8066"
  };

  firebase.initializeApp(firebaseConfig);
  const projectFirestore = firebase.firestore()
  
  export { projectFirestore }