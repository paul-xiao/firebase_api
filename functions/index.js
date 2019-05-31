const firebase = require('firebase-admin');
const functions = require('firebase-functions')
const express = require('express');

const app = express();
var serviceAccount = require('./serviceAccountKey.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://paultest-9d857.firebaseio.com/'
});

app.get('/', function (req, res) {
    const rootRef = firebase.database().ref()
    const usersRef = rootRef.child("user");
    usersRef.once('value').then(snap => {
      res.send({
        ok: snap.val()
      })
    })
    
  });

exports.app = functions.https.onRequest(app);