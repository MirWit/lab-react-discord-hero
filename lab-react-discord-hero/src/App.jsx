import "./App.css";

function App() {
  return (
    <div className="image-container">
      <div className="nav-bar">
        <img
          className="dicsord-logo"
          src="./src/assets/discord-logo-white.png"
          alt="white discord logo"
        />

        <img
          className="menu-icon"
          src="./src/assets/menu-icon.png"
          alt="menu icon"
        />
      </div>
      <div className="continer-background-image">
        <img
          className="background-image"
          src="./src/assets/discord-background.png"
          alt="blue background"
        />
      </div>
    </div>
  );
}

export default App;
