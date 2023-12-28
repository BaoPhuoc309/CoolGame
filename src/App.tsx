import { Provider } from "react-redux";
import "./styles/main.scss";
import AppRouter from "./ultility/AppRouter";
import { store } from "./Redux/Store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
