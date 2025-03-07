import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/profile">Go to Profile</Link>
    <br />
    <Link to="/blog/1">View Blog Post 1</Link>
  </div>
);

export default Home;
