import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  Message,
  MessageList,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiChatbot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyCZ8_Rs6r6MkDgSw3VMC3iaeEvfOSs8p5s"
  );

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const handleSend = async (message) => {
    if (!message.trim()) return; // Prevent sending empty messages
    try {
      setTyping(true);
      const result = await model.generateContent(message);
      const response = result.response;

      // Sanitize the response to remove Markdown
      const sanitizedResponse = response.text().replace(/[#*_`~]/g, "");

      // Update messages state
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: message,
          sender: "user",
          direction: "outgoing", // User message
        },
        {
          message: sanitizedResponse,
          sender: "ChatGPT",
          direction: "incoming", // ChatGPT message
        },
      ]);
      setTyping(false);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: "Oops! Something went wrong. Please try again.",
          sender: "ChatGPT",
          direction: "incoming",
        },
      ]);
      setTyping(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "93vh",
        width: "100vw",
        backgroundColor: "#f0f0f0",
      }}
    >
      <MainContainer
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <ChatContainer
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <MessageList
            typingIndicator={
              typing ? <TypingIndicator content="ChatGPT is typing" /> : null
            }
          >
            {messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  model={message}
                  direction={message.direction}
                  sentTime="now"
                  avatarSrc={
                    message.sender === "ChatGPT"
                      ? "https://via.placeholder.com/150"
                      : undefined
                  }
                  style={{
                    backgroundColor: "transparent", // Set to transparent
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "5px",
                    alignSelf:
                      message.sender === "ChatGPT" ? "flex-start" : "flex-end", // Align messages
                  }}
                >
                  <div>{message.message}</div>
                </Message>
              );
            })}
          </MessageList>
          <MessageInput
            placeholder="Type your message here..."
            onSend={(message) => handleSend(message)}
            style={{
              width: "100%",
              backgroundColor: "transparent", // Set input background to transparent
              border: "1px solid #ccc", // Optional: add a border for visibility
            }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default AiChatbot;
