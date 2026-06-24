import React from "react";

const Profile = ({
  username,
  followers,
  isFollowing,
  followUser,
  unfollowUser,
}) => {
  return (
    <div className="profile-card">
      

      <h2>{username}</h2>

      <h3>Followers: {followers}</h3>

      <p>
        Status: {isFollowing ? "Following" : "Not Following"}
      </p>

      <button onClick={followUser}>
        Follow
      </button>

      <button onClick={unfollowUser}>
        Unfollow
      </button>
    </div>
  );
};

export default Profile;