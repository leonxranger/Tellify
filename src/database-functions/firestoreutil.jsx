import { doc, serverTimestamp, setDoc ,addDoc ,collection} from "firebase/firestore"; 
import {db} from '../config/firebase-config.jsx'
export  async function createUserDocument(user){
try {
   await setDoc(doc(db, "Users",user.uid), {
      name: user.displayName || user.email,
      uid : user.uid,
      Email: user.email,
      createdAt: new Date(),
      storyCount: 0,
      totalLikes: 0,
      followers: []
  });
  console.log("Document written with ID: ", user.uid);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

export  async function CreateStoryDocument(user){
try {
    const storyDocRef = doc(collection(db, "Stories"));
   await setDoc(storyDocRef, {

        title: "Untitled Story",
        content: "",
        authorId: user.uid,
        authorName: user.name,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        status: "draft", // can be draft, published, archived
        likes: 0
  });
  console.log("Document written with ID: ", storyDocRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}