const functions = require("firebase-functions");
const cors = require("cors")({origin: true});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.logFPS = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not Allowed.",
      });
    }
    res.status(200).json({
      message: "Success: "+req.query.data,
    });
  });
  functions.analytics.logEvent("in_app_purchase");
});
