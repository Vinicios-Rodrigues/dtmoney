import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import * as S from "./ExtractTable.styles";

export const ExtractTable = () => {
  const { transactions } = useContext(TransactionsContext);

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
              <td className={add.type}>
                {new Intl.NumberFormat("PT-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(add.amount)}
              </td>
              <td>{add.category}</td>
              <td>
                {new Intl.DateTimeFormat("PT-BR").format(
                  new Date(add.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
};
