import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBqBZM7BEwhOxYeiVGF2O50d__kUiGqMY",
  authDomain: "app-e0f8e.firebaseapp.com",
  projectId: "app-e0f8e",
  storageBucket: "app-e0f8e.appspot.com",
  messagingSenderId: "639593789333",
  appId: "1:639593789333:web:ba5c5288aca936d7fae89c",
  databaseURL: "https://app-e0f8e-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
