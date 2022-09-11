import "./styles/App.scss";
import { AuthContextProvider, GameContextProvider } from "./contexts";
import ModalContextProvider from "./contexts/ModalContext/ModalContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <AuthContextProvider>
      <GameContextProvider>
        <ModalContextProvider>
          <div className="container">
            <Routes />
          </div>
        </ModalContextProvider>
      </GameContextProvider>
    </AuthContextProvider>
  );
}

export default App;
