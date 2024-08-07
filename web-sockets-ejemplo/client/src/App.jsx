import { useEffect } from "react";
import { useState } from "react";

function App({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log("entree");
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.elements.text.value;
    socket.emit("message", text);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Write u message"
        />
      </form>
      <section>
        {messages.map((message) => {
          return (
            <div key={message}>
              <p>{message}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
