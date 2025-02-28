import { useState } from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <MainContent />
      <Footer />

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Vite + React</h1>
      <div className="card" style={{ textAlign: "center" }}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
