import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./ExtractTable.styles";

interface transactions {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
  id: number;
}

export const ExtractTable = () => {
  const [transactions, setTransactions] = useState<transactions[]>([]);
  useEffect(() => {
    api("http://localhost:3000/api/transactions").then((response) =>
      setTransactions(response.data.transactions)
    );
  }, []);
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria </th>
            <th>Data </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((add) => (
            <tr key={add.id}>
              <td>{add.title}</td>
              <td className={add.type}>{add.amount}</td>
              <td>{add.category}</td>
              <td>{add.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
};
