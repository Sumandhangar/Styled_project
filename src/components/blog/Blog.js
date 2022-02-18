import React from "react";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div class="container">
      <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/service/inner'>Service</Link></li>
            </ul> 
        <h1 className="text-center mt-5">Blog page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Blog;