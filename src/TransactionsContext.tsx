import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface childrenProps {
  children: ReactNode;
}

interface transaction {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
  id: number;
}

type transactionIput = Omit<transaction, "id" | "createdAt">;

interface contextprops {
  transactions: transaction[];
  createTransaction: (transaction: transactionIput) => Promise<void>;
  // funções assincronas recebem um Promisse por padrão, então temos que tipa-los
}

export const TransactionsContext = createContext<contextprops>(
  {} as contextprops // força ao TS que a props tem o "tipo" desejado
);

export const TransactionsProvider = ({ children }: childrenProps) => {
  const [transactions, setTransactions] = useState<transaction[]>([]);

  // chamada api
  useEffect(() => {
    api("http://localhost:3000/api/transactions").then((response) =>
      setTransactions(response.data.transactions)
    );
  }, []);
  // espera a chamada api para inseir os dados
  async function createTransaction({ ...transactionIput }) {
    const response = await api.post("/transactions", {
      ...transactionIput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
