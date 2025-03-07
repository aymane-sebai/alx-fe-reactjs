import { Link, Outlet } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <Link to="details">View Details</Link> | <Link to="settings">Settings</Link>
    <Outlet />
  </div>
);

export default Profile;
