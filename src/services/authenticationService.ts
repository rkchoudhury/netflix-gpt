import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../config/firebase";

// Firebase Doc: https://firebase.google.com/docs/auth/web/password-auth

const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw error;
    });
};

const authenticateUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw error;
    });
};

const updateUserProfile = async (
  user: User,
  name: string,
  photoURL: string
) => {
  return updateProfile(user, {
    displayName: name,
    photoURL: photoURL,
  })
    .then(() => {
      // Profile updated!
      return true;
    })
    .catch((error) => {
      throw error;
    });
};

const signOutUser = async () => {
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      throw error;
    });
};

export { authenticateUser, createUser, updateUserProfile, signOutUser };
