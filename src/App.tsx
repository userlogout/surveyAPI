import QuizComponent from "./components/QuizComponent/QuizCompnent";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div id="root">
        <div className="App">
          <h1>Прохождение опроса</h1>
          <QuizComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
