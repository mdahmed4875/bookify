import {createContext,useContext,useState,useEffect} from 'react'
import {initializeApp} from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth"
import {getFirestore,collection,addDoc,getDocs,doc,getDoc,query,where} from "firebase/firestore"


const FirebaseContext=createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAoI5Bu0HVLjGNsVUCgaaxx5CDmF9PoCaU",
  authDomain: "bookify-f1019.firebaseapp.com",
  projectId: "bookify-f1019",
  storageBucket: "bookify-f1019.firebasestorage.app",
  messagingSenderId: "958173530281",
  appId: "1:958173530281:web:fd72bf97029a0e5ac7c1b8"
};


export const useFirebase=()=>useContext(FirebaseContext);

const firebaseApp=initializeApp(firebaseConfig)
const firebaseAuth=getAuth(firebaseApp);
const googleProvider=new GoogleAuthProvider();
const firestore=getFirestore(firebaseApp);

export const FirebaseProvider=(props)=>{
  
  const [user,setUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,user=>{
      if(user)setUser(user);
      else setUser(null);
    })
  },[])


  const getBookById=async(id)=>{
    const docref=doc(firestore,'books',id);
    const result=await getDoc(docref);
    return result;
  }

  const listAllBooks=()=>{
    return getDocs(collection(firestore,'books'))
  }


  const handleCreateNewListing=async (name,isbn,price)=>{
    return await addDoc(collection(firestore,'books'),{
      name,
      isbn,
      price,
      useID:user.uid,
      userName:user.displayName,
      useremail:user.email,
      photoURL:user.photoURL
    })
  }
  const placeOrder=async (bookId,qty)=>{
    const colletionRef=collection(firestore,'books',bookId,'orders');
    const result=await addDoc(colletionRef,{
      userID:user.uid,
      userName:user.displayName,
      useremail:user.email,
      photoURL:user.photoURL,
    qty,
    })
    return result;
  }

  const signinWithGoogle=()=>{
    signInWithPopup(firebaseAuth,googleProvider)
  }

  const signinUserWithEmailAndPassword=(email,password)=>{
    signInWithEmailAndPassword(firebaseAuth,email,password);
  }

  const SignupUserWithEmailAndPassword=(email,password)=>{
    createUserWithEmailAndPassword(firebaseAuth,email,password)
  }
  const isLoggedIn=user?true:false;

    return <FirebaseContext.Provider value={{
      isLoggedIn,
      signinWithGoogle,
      SignupUserWithEmailAndPassword,
      signinUserWithEmailAndPassword,
      handleCreateNewListing,
      listAllBooks,
      getBookById,
      placeOrder,

    }} >{props.children}</FirebaseContext.Provider>
};
