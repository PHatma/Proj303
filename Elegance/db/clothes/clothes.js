import { db } from "../Config";
import {getDocs,doc,setDoc,addDoc,deleteDoc,collection,query,where,orderBy,
  onSnapshot,} from "firebase/firestore";
// Get a list of cities from your database
async function getClothes() {
  const clothesCol = collection(db, "clothes");
  const q = query(clothesCol, orderBy('id'));
  const clotheSnapshot = await getDocs(q);
  const clotheList = clotheSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return clotheList;
}
export async function getClotheById(id) {
  const usersRef = collection(firestoreDB, "users");
  const q = query(usersRef, where("id", "==", id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
      return {id: doc.id, ...doc.data()};
  });
}
async function editClothe(clothe) {
  console.log("at editClothe", clothe);
  await setDoc(doc(db, "clothes", clothe.id), clothe);
}

async function deleteClothe(id) {
  try {
    await deleteDoc(doc(db, "clothes", id));
    console.log("Document deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

async function addClothe(clothe) {
  try {
    const docRef = await addDoc(collection(db, "clothes"), clothe);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "clothes")),
    (snapshot) => {
      const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
      snapshot.docChanges().forEach((change) => {
        // console.log("changes", change, snapshot.metadata);
        if (callback) callback({ change, snapshot });
      });
      // console.log(source, " data: ", snapshot.data());
    }
  );
  return unsubscribe;
}

export { getClothes, addClothe, editClothe, deleteClothe, subscribe };
