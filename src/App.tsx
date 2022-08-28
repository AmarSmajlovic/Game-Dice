import "./App.css";
import { Board } from "./components";
import GameContextProvider from "./contexts/GameContext/GameContext";

function App() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}

export default App;
