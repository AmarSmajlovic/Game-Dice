import "./styles/App.scss";
import { AuthContextProvider, GameContextProvider } from "./contexts";
import ModalContextProvider from "./contexts/ModalContext/ModalContext";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <GameContextProvider>
          <ModalContextProvider>
            <div className="container">
              <Routes />
            </div>
          </ModalContextProvider>
        </GameContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
