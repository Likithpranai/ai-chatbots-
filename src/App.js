import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./Pages/aiChatbot";
import aiImageGenerator from "./Pages/aiImageGenerator";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ai-chatbot" element={<Chatbot />}></Route>
          <Route
            path="/ai-image-generator"
            element={<aiImageGenerator />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>

      {/* Home (3 Buttons to go to 3 pages ) */}
      {/* Login Page and Authentication using firebase */}
      {/* AI chatbot UI and Logic */}
      {/* AI Image generator UI and Logic */}
      {/* Database to store the previous chats */}
    </div>
  );
}

export default App;
