import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getMessage() {
      const response = await fetch("/api/test");
      const data = await response.json();
      setMessage(data.message);
    }
    getMessage();
  }, []);
  return (
    <>
      <p>Message From GET /api/test: </p>
      <p>{message}</p>
    </>
  );
}

export default App;
