import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchUser } from "./services/githubService";

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await fetchUser(username);
    setUser(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
