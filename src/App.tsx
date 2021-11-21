import { Dashboard } from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Modal from "react-modal";
import { useState } from "react";

function App() {
  const [isNewtransactionsOpen, setIsNewtransactionsOpen] = useState(false);

  function handleCloseNewtransaction() {
    setIsNewtransactionsOpen(false);
  }

  return (
    <div className="App">
      <Header textButton="Nova transação" />
      <Dashboard />
      <Modal
        isOpen={isNewtransactionsOpen}
        onRequestClose={handleCloseNewtransaction}
      ></Modal>
      <GlobalStyle />
    </div>
  );
}

export default App;
