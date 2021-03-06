import {app} from "../Config";
import {onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} from "firebase/auth";

const authentication = getAuth(app);

onAuthStateChanged(authentication, (user) => {
    if (user != null) {
        console.log("authorized user: ", user);
        console.log(authentication.currentUser)
    }
    console.log('isSignedIn=', isSignedIn())
});

async function isSignedIn() {
    console.log('from isSignedIn method: ', authentication.currentUser);
    return await authentication.currentUser != null;
}

async function getUserUId() {
    if (authentication.currentUser != null) {
        return authentication.currentUser.uid;
    } else {
        return null;
    }
}

async function getUserToken() {
    if (authentication.currentUser != null) {
        return await authentication.currentUser.getIdToken();
    }
    return null;
}

async function register(email, password,phonenumber,money,address,fullname,nationaliynumber) {
    console.log('register method with email=', email, ' and password=', password,'and phonenumber=',phonenumber,'and money=',money,'and natinality number=',nationaliynumber,'and full name=',fullname,'and address=',address)
    await createUserWithEmailAndPassword(authentication, email, password,phonenumber,money,nationaliynumber,fullname,address);
}

async function login(email, password) {
    console.log('login method with email=', email, ' and password=', password)
    await signInWithEmailAndPassword(authentication, email, password);
}

async function logout() {
    authentication.signOut().then().catch((e) => console.log(e.message));
}

export {register, login, isSignedIn, getUserUId, logout, getUserToken};