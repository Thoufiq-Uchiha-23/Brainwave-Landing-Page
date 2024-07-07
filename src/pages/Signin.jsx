import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin success"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-page flex justify-center items-center">
      {/* Sign in Page Authentication */}
      <div className="flex flex-col justify-center gap-5 w-[300px] p-3 border rounded-md">
        <label>Enter your email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email here"
          className="p-1 border border-zinc-500 rounded-md"
        />
        <label>Enter your password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password here"
          className="p-1 border border-zinc-500 rounded-md"
        />
        <button onClick={signinUser}>Sign me in</button>
      </div>
    </div>
  );
};

export default SigninPage;
