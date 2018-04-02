import firebase from "firebase"
import { ref, firebaseAuth } from "./constants"

const auth = () =>
  firebaseAuth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(ref.child("users/isAuthed").set(true))

export const logout = () => firebaseAuth().signOut()

export const checkIfAuthed = () => {
  ref
    .child("users/isAuthed")
    .once("value")
    .then(snapshot => snapshot.value())
}

export const saveUser = user =>
  ref
    .child(`users/${user.uid}`)
    .set(user)
    .then(() => user)

export default auth
