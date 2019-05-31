import firebase from 'firebase/app'
import firebaseConf from '~/firebase.config.js'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConf)
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID
}
export const fireDb = firebase.firestore()
export const fireAuth = firebase.auth()
