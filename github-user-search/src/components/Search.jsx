import React, { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    const data = await fetchUserData(query, location, minRepos);
    if (!data || data.length === 0) {
      setError("Looks like we cant find the user");
    } else {
      setUsers(data);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-md w-full max-w-md">
        <input
          type="text"
          placeholder="GitHub Username"
          className="border p-2 rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (e.g., Morocco, USA)"
          className="border p-2 rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repositories"
          className="border p-2 rounded-md"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-md shadow-md flex items-center gap-3">
              <img src={user.avatar_url} alt={user.login} className="w-16 rounded-full" />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                <p>Location: {user.location || "Not available"}</p>
                <p>Repositories: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
