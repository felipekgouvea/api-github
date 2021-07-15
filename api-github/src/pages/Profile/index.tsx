import './styles.css';

import { useState } from 'react';
import axios from 'axios';

type FormData = {
  name: string;
};

type Profiles = {
  avatar_url: string;
  html_url: string;
  followers: number;
  location: string;
  name: string;
};

const Profile = () => {
  const [profiles, setProfiles] = useState<Profiles>();

  const [formData, setFormData] = useState<FormData>({
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((response) => {
        setProfiles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfiles(undefined);
        console.log(error);
      });
  };

  return (
    <>
      <div className="perfil-container">
        <div className="perfil-container-top">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="name"
                value={formData.name}
                className="search-input"
                placeholder="Usuário GitHub"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary perfil-button">
                Buscar
              </button>
            </div>
          </form>
        </div>
        {profiles && (
          <div className="perfil-container-bottom">
            <div className="perfil-image">
              <img src={profiles.avatar_url} alt={profiles.name} />
            </div>

            <div className="perfil-content">
              <h1>
                <span>Informações</span>
              </h1>
              <p>
                <span>Perfil:</span> {profiles.html_url}
              </p>
              <p>
                <span>Seguidores:</span> {profiles.followers}
              </p>
              <p>
                <span>Localidade:</span> {profiles.location}
              </p>
              <p>
                <span>Nome:</span> {profiles.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
