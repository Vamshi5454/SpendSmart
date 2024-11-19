import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashBoard from "../../components/DashBoard/DashBoard";
import axios from "axios";

function Home() {
  const [name, setName] = useState("");
  // const location = useLocation();
  // const { userData } = location.state || {};
  // conso(le.log(userData);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/auth/find")
      .then((response) => setName(response.data.username))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Welcome {name}</h1>
      {/* <h1> {username.id}</h1> */}
      <DashBoard />
    </div>
  );
}

export default Home;
