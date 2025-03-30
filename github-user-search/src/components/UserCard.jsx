import React from "react";

const UserCard = ({ user }) => {
  if (!user) return <p className="text-red-500">User not found.</p>;

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <img src={user.avatar_url} alt={user.login} className="w-20 rounded-full" />
      <h2 className="text-lg font-bold">{user.name || user.login}</h2>
      <p>Followers: {user.followers} | Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" className="text-blue-500">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
