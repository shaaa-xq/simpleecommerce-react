import { auth } from "../configurations/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = async() => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch(err) {
      console.error(err)
    }
  }

  return(
    <>
      <input 
        type="email" 
        placeholder="Masukkan Email..."
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      <input 
        type="password" 
        placeholder="Masukkan Password..."
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <button onClick={handleSignIn}>Sign In</button>
    </>
  )
}

export default SignInForm