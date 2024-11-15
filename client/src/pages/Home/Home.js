import React from "react";
import { useLocation } from "react-router-dom";
import DashBoard from "../../components/DashBoard/DashBoard";

function Home() {
  const location = useLocation();
  const { userData } = location.state || {};
  console.log(userData);

  return (
    <div>
      <h1>Welcome :{userData.username}</h1>
      {/* <h1> {username.id}</h1> */}
      <DashBoard id={userData.id} />
    </div>
  );
}

export default Home;
