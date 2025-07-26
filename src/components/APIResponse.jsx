import React, { useState } from "react";

const APIResponse = async ({setResponse, userInput, setLoading}) => {
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
      console.log(content);
      setResponse(content);
    } catch (err) {
      setResponse("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };
export default APIResponse;