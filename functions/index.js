const functions = require("firebase-functions");
const admin = require("firebase-admin");

// const PROJECTC = require("../pages/index.tsx");

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.scheduledFunctionStoreData = functions.pubsub
  .schedule("every 24 hours")
  .timeZone("Europe/London")
  .onRun((snap, context) => {
    console.log(snap, context);
    const db = admin.firestore();
    return db.document(`minerHistory/${new Date()}`).set({
      test: "testing",
      number: 22,
      name: "james",
    });
  });
// db.collection("minerHistory").doc(new Date())
