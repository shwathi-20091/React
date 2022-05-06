import {  Outlet, Link } from "react-router-dom";
function Layout() {
    return (
      <div className="nav">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav >
          
              <Link to="/">Home</Link>&nbsp;
              <Link to="/about">About</Link>&nbsp;
              <Link to="/dashboard">Dashboard</Link>&nbsp;
              <Link to="/nothing-here">Nothing_Here</Link>

        </nav>
  
        <hr />
  
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </div>
    );
  }
  export default Layout;