import QuizComponent from "./components/QuizComponent/QuizComponent";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div id="root">
        <div className="App">
          <div className="startText">
            <h2>Прохождение опроса</h2>
          </div>
          <QuizComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
