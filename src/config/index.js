import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

export default {
  authCreds: {
    // TODO: Check ✅ if 'clientID' can be changed to 'clientId'
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  port: process.env.PORT,
};
