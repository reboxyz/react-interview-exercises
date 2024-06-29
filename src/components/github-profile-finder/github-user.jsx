import React from "react";

const GitHubUser = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="github-user">
      <div>
        <img src={avatar_url} className="github-avatar" alt="User" />
      </div>
      <div className="github-user-name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>User joined on {`${createdDate.toLocaleString("en-us")}`}</p>
      </div>
      <div className="github-user-profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Followings</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubUser;
