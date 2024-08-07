import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import io from "socket.io-client";

const socket = io("http://localhost:4000");

ReactDOM.createRoot(document.getElementById("root")).render(
  <App socket={socket} />,
);
