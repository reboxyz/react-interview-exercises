import React, { useEffect, useState } from "react";
import "./styles.css";
import GitHubUser from "./github-user";

const GitHubProfileFinder = () => {
  const [username, setUsername] = useState("reboxyz");
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data) {
        setUserData(data);
        setUsername("");
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading data....</div>;

  if (errorMessage) return <div>Error encountered: {errorMessage}</div>;

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData && <GitHubUser user={userData} />}
    </div>
  );
};

export default GitHubProfileFinder;
