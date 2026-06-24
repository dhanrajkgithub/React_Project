import React, { useState } from "react";
import Profile from "./Profile";
import'./App.css'

const App = () => {
  const [followers, setFollowers] = useState(270);
  const [isFollowing, setIsFollowing] = useState(false);

  const followUser = () => {
    if (!isFollowing) {
      setFollowers(followers + 1);
      setIsFollowing(true);
    }
  };

  const unfollowUser = () => {
    if (isFollowing) {
      setFollowers(followers - 1);
      setIsFollowing(false);
    }
  };

  return (
    <Profile
      username="dhanraj.s_k"
      followers={followers}
      isFollowing={isFollowing}
      followUser={followUser}
      unfollowUser={unfollowUser}
    />
  );
};

export default App;