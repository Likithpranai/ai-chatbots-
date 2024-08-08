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

const API_KEY = "";

const AiChatbot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    // Update the messages here

    setMessages(newMessages);
    // Set a typing indicator (ChatGPT is typing )
    setTyping(true);
    // Process message to chatgpt and receive a response
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // role: user assistant and system
    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I am 10 years old.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

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
                />
              );
            })}
          </MessageList>
          <MessageInput
            placeholder="Type your message here..."
            onSend={handleSend}
            style={{
              width: "100%",
            }}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default AiChatbot;
