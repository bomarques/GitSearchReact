import logo from './logo.svg';
import GithubImage from './github-mark.png'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
      event.preventDefault();
      fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));

  }

  const handleChange = (event) => {
      setSearch(event.target.value);
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 texte-uppercase">Github Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-gourp">
          <div className="input-group">
            <input 
            type="text" 
            className="form-control"
            required
            value={search}
            onChange={handleChange}
            />
            <span className="input-group-btm">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (<img src={GithubImage} className="responsive rounded-circle" alt="" height="200px" />)}
        {userData && (
        <div>
           <img src={userData.avatar_url} className="responsive rounded-circle" alt="" height="200px" />

        <h1 className="pt-5">
          <a href="https://github.com/bomarques" target="_new">{userData.name}</a>
          <h3>{userData.location}</h3>
          <p>
            <a href={userData.blog} target="_new" className="text-info">
            {userData.blog}
            </a>
          </p>
        </h1>
        </div>)}
       
      </div>
    </div>
  );
}

export default App;
