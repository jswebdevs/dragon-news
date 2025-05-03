import React from "react";
import { Link } from "react-router-dom"; // Correct import
import userIcon from "../assets/user.png";
import { useAuth } from "../providers/AuthProvider";

const Menu = () => {
  const { user, loggedIn } = useAuth();

  console.log(user);

  return (
    <div className="px-[5%] py-2">
      <div className="flex items-center justify-between">
        <div className="text-white">Empty</div>
        <div>
          <ul className="flex justify-center">
            <li className="me-3 hover:scale-105">
              <Link to="/">Home</Link>
            </li>
            <li className="me-3 hover:scale-105">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:scale-105">
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>
        <div className="account flex items-center justify-end gap-3">
          {loggedIn ? (
            <>
              <div className="icon w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={user.photoURL || userIcon}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-black">{user.displayName || "User"}</span>
              <Link to="/profile">
                <button className="btn btn-sm btn-primary">Profile</button>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-neutral">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
