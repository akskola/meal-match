import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXVulGTD8vC_ho1uuXtY-EtmWz7hUJAtA",
  authDomain: "lighthall-challenge-4-68155.firebaseapp.com",
  projectId: "lighthall-challenge-4-68155",
  storageBucket: "lighthall-challenge-4-68155.appspot.com",
  messagingSenderId: "818653168225",
  appId: "1:818653168225:web:6a883248ba9fce9de4e020",
  measurementId: "G-3RZRRLL9B5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export const addUser = async (restaurants, desirabilities) => {
  const collectionRef = collection(firestore, "Invites");
  const lastDoc = await getDocs(collectionRef);
  const lastDocId = lastDoc.docs[lastDoc.docs.length - 1].id;

  const nextDocId = parseInt(lastDocId) + 1;
  const docRef = doc(firestore, "Invites", nextDocId.toString());
  const data = { restaurants, desirabilities };

  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log("Document exists");
    } else {
      await setDoc(docRef, data);
      console.log("Document has been added successfully");
    }
  } catch (error) {
    console.log("Error checking if document exists:", error);
    return false;
  }
  return Promise.resolve(lastDocId);
};

export const getInvite = async (inviteId) => {
  const docRef = doc(firestore, "Invites", inviteId);
  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const { restaurants, desirabilities } = data;
      return { restaurants, desirabilities };
    } else {
      console.log("Document does not exist");
      return false;
    }
  } catch (error) {
    console.log("Error getting document:", error);
    return false;
  }
};
