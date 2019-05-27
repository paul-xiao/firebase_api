// const admin = require('firebase-admin');
const functions = require('firebase-functions')
const firebase = require('firebase')
const express = require('express');
const cors = require('cors')({
    origin: true
}); // automatically allow cross-origin requests to be made

const app = express();

const config = {
    apiKey: 'AIzaSyAsgT4j-ufCqx11GTEvUd3d-yLIlP571RM',
    authDomain: 'paultest-9d857.firebaseapp.com',
    databaseURL: 'https://paultest-9d857.firebaseio.com/',
    storageBucket: 'paultest-9d857.appspot.com'
}
// // Fetch the service account key JSON file contents
// const serviceAccount = require("./serviceAccountKey.json");
// // Initialize the app with a service account, granting admin privileges
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://paultest-9d857.firebaseio.com"
// });

firebase.initializeApp(config)
// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = firebase.database();
const user = db.ref().child('user');
console.log('-----------------------------xxx---- ----------------------------')

user.on("value", function (snapshot) {
    console.log(snapshot.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


console.log('---------------------------xx----------------------------------')
app.get('/', (req, res) => {

    console.log('1111111111')
    res.send('hellooooooooooooooo')
});

app.get('/test', (req, res) => {

    console.log('test')
    res.send('test')
});
app.post('/addItem', (req, res) => {
    return cors(req, res, () => {
        console.log(req.body.name)
        const item = req.body.name
        user.set({
            name: item
        })
        res.send({
            message: 'ok'
        })
    })
})

app.get('/user', (req, res) => {
    return cors(req, res, () => {
        user.on("value", function (snapshot) {
            console.log(snapshot.val());
            res.send('ok')
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            res.send('failed')
        });

        
    })
})


exports.app = functions.https.onRequest(app);