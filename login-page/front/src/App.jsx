import Router from "../src/routes/Router";
import GlobalStyle from "./assets/styles/GlobalStyle";
import GlobalProvider from "./provider/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
        <GlobalStyle />
        <Router />
    </GlobalProvider>
  );
}

export default App;
