import firebase from 'firebase';

try {
  const config = {
    apiKey: 'AIzaSyBKxDiinc5LL-H_mmV4M21q75FDSp9ObCk',
    authDomain: 'todo-app-d849b.firebaseapp.com',
    databaseURL: 'https://todo-app-d849b.firebaseio.com',
    storageBucket: 'todo-app-d849b.appspot.com',
    messagingSenderId: '862647065209',
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;
