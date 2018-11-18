/* This component initialize firebase app and ask user to recieve notification and return notification to server */

//Import 3rd Party Modules
import firebase from "firebase";
import axios from "axios";

//This method will initialize firebase
export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "442335061084"
  });
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(registration => {
      firebase.messaging().useServiceWorker(registration);
    });
};

//This method will ask user for permission to recieve notication
export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    const email = localStorage.getItem("email");
    axios({
      method: "post",
      url: "http://localhost:3000/notification",
      data: {
        token: token,
        email: email
      },
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    });
  } catch (error) {
    console.error(error);
  }
};
