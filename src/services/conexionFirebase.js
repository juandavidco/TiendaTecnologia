
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJVGGCIeJC64QEnEzr7ilfRQVbIWoiY6Q",
    authDomain: "tiendampb.firebaseapp.com",
    projectId: "tiendampb",
    storageBucket: "tiendampb.appspot.com",
    messagingSenderId: "1085100409356",
    appId: "1:1085100409356:web:02264d03aa620069b22429",
    measurementId: "G-00WWTDF6Z9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
