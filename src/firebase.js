import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {

    apiKey: "AIzaSyCt3-msIGR4jVzJsJb7EPZmqUglNJwIoO4",
    authDomain: "cynthiaobasuyi.firebaseapp.com",
    projectId: "cynthiaobasuyi",
    storageBucket: "cynthiaobasuyi.appspot.com",
    messagingSenderId: "916914651139",
    appId: "1:916914651139:web:194a43a55eae471d850e36"

}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
