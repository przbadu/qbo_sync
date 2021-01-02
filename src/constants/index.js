let API_URL;
let WS_URL;
if (process.env.NODE_ENV === "production") {
  API_URL = "http://qboauth.prod";
  WS_URL = "wss://qboauth.prod/cable";
} else {
  API_URL = "http://localhost:3000";
  WS_URL = "wss://localhost:3000/cable";
}

export { API_URL, WS_URL };
