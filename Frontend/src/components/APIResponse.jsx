import React, { useState } from "react";

const APIResponse = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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", // Replace with your actual API key
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-exp:free",
          messages: [
            {
              role: "user",
              content: userInput
            }
          ]
        })
      });

      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content || "No response received.";
      setResponse(content);
    } catch (err) {
      setResponse("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Text Chat with OpenRouter</h2>
      <textarea
        rows="4"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message here..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <br />
      <button onClick={sendMessage} disabled={loading || !userInput.trim()}>
        {loading ? "Sending..." : "Send Message"}
      </button>
      <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default APIResponse;