import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>Bienvenue sur mon application React</h1>
      <UserProfile name="Aymane" age="25" bio="Loves hiking and photography" />
    </div>
  );
}

export default App;