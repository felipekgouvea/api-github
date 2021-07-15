import '../NavBar/styles.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/">
          <h4 className="nav-logo-text">Github API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
