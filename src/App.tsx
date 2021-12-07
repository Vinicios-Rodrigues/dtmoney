import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Dashboard } from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import NewTransactionsModal from "./components/NewTransactionsModal";
import { TransactionsProvider } from "././TransactionsContext";
function App() {
  const [isNewtransactionsOpen, setIsNewtransactionsOpen] = useState(false);

  function handleCloseNewtransaction() {
    setIsNewtransactionsOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={() => setIsNewtransactionsOpen(true)}
        textButton="Nova transação"
      />
      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewtransactionsOpen}
        onRequestClose={handleCloseNewtransaction}
      ></NewTransactionsModal>
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
