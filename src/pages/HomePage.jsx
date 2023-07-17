import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import "../styles/scss/main.scss";

function HomePage() {
  return (
    <div className="homeContainer">
      <div className="itemsContainer">
        <nav>
          <h1>Header</h1>
          <AiOutlineLogout size={"1.5rem"} />
        </nav>
      </div>

      <main></main>
    </div>
  );
}

export default HomePage;
