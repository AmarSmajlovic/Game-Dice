import "./App.css";
import { Board } from "./components";
import { GameContextProvider } from "./contexts";

function App() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}

export default App;
