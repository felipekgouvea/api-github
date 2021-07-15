import './styles.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Desafio Github API</h1>
        <h3>Bootcamp Spring React - DevSuperior</h3>
        <Link to="/profile">
          <button type="button" className="btn btn-primary">
            Começar
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
