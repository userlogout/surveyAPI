import TestComponent from "./components/secondcomponent/TestCompnent";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>sometext</h1>
        <TestComponent />
      </div>
    </Provider>
  );
}

export default App;
