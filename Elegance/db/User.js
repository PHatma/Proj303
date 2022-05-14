import {addDoc, collection, getDocs, getFirestore, setDoc, doc, query, where,onSnapshot} from "firebase/firestore";
import {app} from "./Config";

const firestoreDB = getFirestore(app);

async function editUser(user) {
    console.log("at editUsers", user);
    await setDoc(doc(db, "users", user.id), user);
}

async function getUsers() {
    const usersCol = collection(firestoreDB, "users");
    const userSnapshot = await getDocs(usersCol);
    return userSnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

export async function getUserById(id) {
    const usersRef = collection(firestoreDB, "users");
    const q = query(usersRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
}

async function addUser(user) {
    await setDoc(doc(firestoreDB, "users", user.id), user);
}
// function subscribeUser(callback) {
//     const unsubscribe = onSnapshot(
//     query(collection(db, "users")),
//         (snapshot) => {
//             const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
//             snapshot.docChanges().forEach((change) => {
//                 // console.log("changes", change, snapshot.metadata);
//                 if (callback) callback({ change, snapshot });
//             });
//             // console.log(source, " data: ", snapshot.data());
//         }
//     );
//     return unsubscribe;
// }

export {getUsers, addUser,editUser
    // ,subscribeUser
};