import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import config from '~/firebase.config.js'

if (!firebase.apps.length) {
  firebase.initializeApp(config())
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID
}
export const fireDb = firebase.firestore()
export const fireAuth = firebase.auth()
