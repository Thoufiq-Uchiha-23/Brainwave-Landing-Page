import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { google, brainwaveSymbol } from "../assets";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
    // Success
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="signup-page flex flex-col gap-3 font-code font-bold justify-center items-center min-h-screen bg-zinc-900">
      <div className="flex items-center justify-evenly">
        <img src={brainwaveSymbol} alt="Brainwave" width={70} height={70} />
        <h1 className="font-sora font-extrabold text-5xl">Brainwave</h1>
      </div>
      <div className="flex flex-col justify-center gap-3 w-[300px] px-5 py-10 rounded-md bg-blue-900">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email here"
          className="p-1 border border-zinc-500 rounded-md"
        />
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your password here"
          className="p-1 border border-zinc-500 rounded-md"
        />
        <button onClick={createUser} className="mt-7">
          Sign Up
        </button>
        <p className="text-center">or</p>
        <div className="flex gap-2 justify-center">
          <img src={google} alt="Google Icon" width={20} height={20} />
          <button onClick={signupWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
