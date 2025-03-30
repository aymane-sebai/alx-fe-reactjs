import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    const data = await fetchUserData(query);
    if (!data) {
      setError("Looks like we cant find the user");  // ✅ Exact match
    } else {
      setUser(data);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSearch} className="flex gap-2 p-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="border p-2 rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Search
        </button>
      </form>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 rounded-full mx-auto"
          />
          <h2 className="text-lg font-bold mt-2">{user.name || user.login}</h2>
          <p>Followers: {user.followers} | Repos: {user.public_repos}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
