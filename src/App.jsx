import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
// Firebase
import { app } from "./firebase";
import { useState, useEffect } from "react";
import Signup from "./pages/Signup";
import SigninPage from "./pages/Signin";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Yes, you are logged in
        setUser(user);
      } else {
        // User is logged out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <Signup />
        {/* <SigninPage /> */}
      </div>
    );
  }

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-10">Something</Button> */}
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
