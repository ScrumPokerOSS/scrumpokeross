const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.createSession = functions.https.onRequest((request, response) => {
    
    cors ( request, response, () => {
        console.log("cors working fine!!");
        var text = '{ "data" : [' +
                    '{ "text":"ok" } ]}';
        response.status(200).send(text);
    });
});