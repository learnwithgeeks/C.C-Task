/* This component load's firebase app js and firebase messaging to client */
importScripts("https://www.gstatic.com/firebasejs/5.5.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.8/firebase-messaging.js");
firebase.initializeApp({
  messagingSenderId: "442335061084"
});
if (!firebase.messaging.isSupported()) {
  console.log("Firebase Messaging is not supported");
} else {
  const messaging = firebase.messaging();
}
