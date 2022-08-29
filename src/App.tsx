import "./styles/App.scss";
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
