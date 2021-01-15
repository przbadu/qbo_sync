let API_URL;
let WS_URL;
if (process.env.NODE_ENV === "production") {
  API_URL = "https://qboapi.tk";
  WS_URL = "ws://qboapi.tk/cable";
} else {
  API_URL = "http://localhost:3000";
  WS_URL = "ws://localhost:3000/cable";
}

export { API_URL, WS_URL };
