
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDEmms8bFY8oJcMvaFJUCoVl_DBbtWXZzA",
    authDomain: "dueprogetto.firebaseapp.com",
    projectId: "dueprogetto",
    storageBucket: "dueprogetto.appspot.com",
    messagingSenderId: "649746301952",
    appId: "1:649746301952:web:ea0e940276cc848a3b04e5"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  //auth obj
  const auth = getAuth();

 
  const signupForm = document.getElementById('signup')

  signupForm.onsubmit = (e)=>{
      e.preventDefault()
      const username = e.target.username.value;
      const password = e.target.password.value;
      createUserWithEmailAndPassword(auth,username,password)
        .then((cred)=>{
            console.log('====================================');
            console.log(cred);
            console.log('====================================');
        })
        .catch((err)=>{
            console.log('====================================');
            console.log(err.message);
            console.log('====================================');
        })
  }

  const signInForm = document.getElementById('signin')

  signInForm.onsubmit = (e)=>{
      e.preventDefault()
      const username = e.target.username.value;
      const password = e.target.password.value;
      signInWithEmailAndPassword(auth,username,password)
        .then((cred)=>{
            console.log('================AIzaSyDEmms8bFY8oJcMvaFJUCoVl_DBbtWXZzA====================');
            console.log(cred);
            console.log('====================================');
        })
        .catch((err)=>{
            console.log('====================================');
            console.log(err.message);
            console.log('====================================');
        })
  }


  document.getElementById('signout').onclick = ()=>{
        signOut(auth)
            .then(()=>{
                console.log('signout');
            })
            .catch(()=>{
                console.log('error:signout');
            })
  }


onAuthStateChanged(auth,(user)=>{
    if (user) {
        console.log('====================================');
        console.log(user);
        console.log('====================================');
    }
    else {
        console.log('====================================');
        console.log('user not found');
        console.log('====================================');
    }
})



  
