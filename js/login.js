import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getAuth,
  //  onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyApDLiOvCkuhozs-7_ebxCkeYRbaaPaClw",
  authDomain: "opp-online-placement-portal.firebaseapp.com",
  projectId: "opp-online-placement-portal",
  storageBucket: "opp-online-placement-portal.appspot.com",
  messagingSenderId: "1018033370321",
  appId: "1:1018033370321:web:063832ae90f0b9bb6c01f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// document.getElementById("login").addEventListener("click", (event) => {
//   event.preventDefault();
//   const role = document.getElementById("role").value;
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   console.log(role, username, password);
//   signInWithEmailAndPassword(auth, username, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const uidi = userCredential.user.uid;
//       console.log("logged in");
//       console.log(uidi, user);
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           window.location.href = "dashboard.html";
//           // const uid = user.uid;
//           // ...
//         } else {
//           window.location.href = "login.html";
//         }
//       });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(error + errorMessage);
//     });
// });

const login = () => {
  let user = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console(user, password);
};
