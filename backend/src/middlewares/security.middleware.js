const cors = require("cors");
const helmet = require("helmet");

const corsOptions = {
  origin: process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(",")
    : ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const enableCORS = cors(corsOptions);

const setSecurityHeaders = helmet({
  contentSecurityPolicy: false,
  frameguard: { action: 'deny' },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
});


module.exports = { enableCORS, setSecurityHeaders };
