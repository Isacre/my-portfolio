import "./App.css";
import MainPage from "./pages/Main";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
