import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header textButton="Nova transação" />
      <GlobalStyle />
    </div>
  );
}

export default App;
