
import {Link } from "react-router-dom";
function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <li><Link to="/">home page</Link></li>
          <li><Link to="/about">About</Link></li>
        </p>
      </div>
    );
  }
  export default NoMatch;