import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

const Profile = () => {
    const navigate = useNavigate()
  const { user, logout } = useAuth();
  const hadleLogout = ()=>{
    logout();
    navigate("/login")
  }
  return (
    <div className="container">
      <div className="mt-5 card w-50 m-auto">
        <div className="card-header">
          <h1 className="text-center mb-3">Profile</h1>
        </div>
        <div className="card-body d-flex flex-column gap-3">
          <h3>Username: {user && user.username}</h3>
          <h3>Password: {user && user.password}</h3>
        </div>
        <div className="card-footer d-flex justify-content-end ">
            <button className="btn btn-outline-dark m-2" onClick={hadleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
