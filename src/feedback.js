import { changeTheme } from "./changeTheme.js";
import clickBtn from "./btn.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDbC9rlMfuu0Tx0TJTHj2nuqeYg0NUC4PU",
  authDomain: "collecting-feedback-cb9a0.firebaseapp.com",
  databaseURL: "https://collecting-feedback-cb9a0-default-rtdb.firebaseio.com",
  projectId: "collecting-feedback-cb9a0",
  storageBucket: "collecting-feedback-cb9a0.firebasestorage.app",
  messagingSenderId: "247900089400",
  appId: "1:247900089400:web:1fda2795ddaa75ce058acd",
  measurementId: "G-2CQX43NGMK",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const main = () => {
  changeTheme();
  clickBtn(set,ref,db);
};
main();
