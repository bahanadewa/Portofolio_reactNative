import fireBase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCC_4Iy4-oKFn6BzM5ftn08_TzWvqtvzfk",
    authDomain: "foodiebites-7dcc7.firebaseapp.com",
    databaseURL: "https://foodiebites-7dcc7.firebaseio.com",
    projectId: "foodiebites-7dcc7",
    storageBucket: "foodiebites-7dcc7.appspot.com",
    messagingSenderId: "684712665523",
    appId: "1:684712665523:web:74dd19b70f962b2570abc6",
    measurementId: "G-V7T0KD8TLB"
  };

export const Firebase = fireBase.initializeApp(firebaseConfig);