import app from "../index.js"; // adjust path based on location

export default function handler(req, res) {
  // Let Express handle all requests
  app(req, res);
}
