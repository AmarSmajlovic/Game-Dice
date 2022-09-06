import "./styles/App.scss";
import { Board } from "./components";
import { GameContextProvider } from "./contexts";
import ModalContextProvider from "./contexts/ModalContext/ModalContext";

function App() {
  return (
    <GameContextProvider>
      <ModalContextProvider>
        <div className="container">
          <Board />
        </div>
      </ModalContextProvider>
    </GameContextProvider>
  );
}

export default App;
