const functions = require("firebase-functions");

// Increase readability in Cloud Logging
require("firebase-functions/lib/logger/compat");

const expressApp = require("./dist/user/server/main").app();

exports.ssr = functions
    .region("us-central1")
    .runWith({})
    .https
    .onRequest(expressApp);
