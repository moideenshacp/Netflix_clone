import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCiurmF2hH1Y-sqrocheUzTDFoqCng-qYs",
  authDomain: "netflix-1e2da.firebaseapp.com",
  projectId: "netflix-1e2da",
  storageBucket: "netflix-1e2da.appspot.com",
  messagingSenderId: "29342709386",
  appId: "1:29342709386:web:bfc3bfb2377a1e1b471f73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)



const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:'local',
            email

        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))

        
    }
}
const logout = async()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}