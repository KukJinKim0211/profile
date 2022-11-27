import "./App.css";
import { FullPage, Slide } from "react-full-page";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

function App() {
  return (
    <FullPage className="App box">
      <Slide>
        <FirstPage />
      </Slide>
      <Slide>
        <SecondPage />
      </Slide>
      <Slide>
        <ThirdPage />
      </Slide>
    </FullPage>
  );
}

export default App;
