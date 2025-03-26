import admin from "firebase-admin";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

const serviceAccount = require(path.resolve(__dirname, "../serviceAccountKey.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
export const auth = admin.auth();

console.log("Firebase inicializado com sucesso!");
