import QuizComponent from "./components/QuizComponent/QuizCompnent";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
