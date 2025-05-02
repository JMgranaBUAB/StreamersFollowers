import React from 'react';

const TikTokCounter = ({ username }) => (
  <div>
    <iframe
      src={`https://livecounts.io/embed/tiktok-live-follower-counter/${username}`}
      title={`TikTok Live Follower Counter - ${username}`}
      style={{ border: "0", width: "300px", height: "80px" }}
    ></iframe>
  </div>
);

const TopStreamersCountik = () => {
  const streamers = [
    "mrbeast",
    "ibaillanos",
    "thegrefg",
    "rubius",
    "elxokas",
    "auronplay",
    "iamcristinini",
    "zyrpesland",
    "illojuan",
    "knekro_",
    "lamejorclaseyt",
    "puertaracing",
    "alexbyonce",
    "jmgranabuab"
  ];

  return (
    <>
      {streamers.map((username) => (
        <TikTokCounter key={username} username={username} />
      ))}
    </>
  );
};

export default TopStreamersCountik;
