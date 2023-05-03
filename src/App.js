import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Paris" />
        </main>
        <footer> Coded by Paulina Prassol Braz </footer>
      </div>
    </div>
  );
}

export default App;
