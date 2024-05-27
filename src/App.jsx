import { Provider } from "react-redux";
import "./App.css";
import Main from "./pages/Main";
import appConfig from "./store/appConfig";

function App() {
  return (
    <>
      <div className="container mx-auto my-12 xl:my-20 lg:my-20 md:my-20 sm:my-14">
        <h1 className="mb-6 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-10 text-center font-bold text-4xl">
          Weather App
        </h1>
        <Provider store={appConfig}>
          <Main />
        </Provider>
      </div>
    </>
  );
}

export default App;
