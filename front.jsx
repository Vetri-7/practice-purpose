import { useState } from "react";

export default function Front() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function connectToServer() {
    setError("");
    try {
      const response = await fetch("http://localhost:3001/api/message");
      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || "Could not connect to the server.");
    }
  }

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: 32 }}>
      <h1>My Front Page</h1>
      <button onClick={connectToServer}>Connect to server</button>
      {message && <p>{message}</p>}
      {error && <p role="alert">{error}</p>}
    </main>
  );
}