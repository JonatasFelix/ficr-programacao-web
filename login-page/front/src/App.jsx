import Router from "../src/routes/Router";
import GlobalStyle from "./assets/styles/GlobalStyle";
import GlobalProvider from "./provider/GlobalProvider";
import Theme from "./assets/styles/Theme";

function App() {
  return (
    <GlobalProvider>
      <Theme>
        <GlobalStyle />
        <Router />
      </Theme>
    </GlobalProvider>
  );
}

export default App;
