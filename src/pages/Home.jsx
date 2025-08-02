import { useState } from "react";
import Header from "../components/Layout/Header";
import UserContext from "../context/UserContext";
import Component2 from "../components/Component2";

const Home = () => {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={{name:user}}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2  />
    </UserContext.Provider>
  );

};

export default Home;
