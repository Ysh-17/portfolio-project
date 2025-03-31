import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("");

  const renderContent = () => {
    switch (activePage) {
      case "Portfolio":
        return <Portfolio />;
      default:
        return <h2 className="page-title">{activePage || "Select an option"}</h2>;
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar setActivePage={setActivePage} />
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;