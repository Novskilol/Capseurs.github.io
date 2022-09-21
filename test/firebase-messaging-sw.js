importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js");

//Using singleton breaks instantiating messaging()
//App firebase = FirebaseWeb.instance.app;


firebase.initializeApp({
  apiKey: "AIzaSyCRv7okSu8Yo7UcYj2CExoeZmSmpYOgTQo",
  authDomain: "capseurs-cc6b3.firebaseapp.com",
  projectId: "capseurs-cc6b3",
  storageBucket: "capseurs-cc6b3.appspot.com",
  messagingSenderId: "701810790036",
  appId: "1:701810790036:web:82e60822b3444a9885ae81",
  measurementId: "G-TXV7PMSTR5"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});