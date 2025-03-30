import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";
const BASE_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = "";
    if (username) query += `+${username} in:login`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${query}&per_page=10`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};
