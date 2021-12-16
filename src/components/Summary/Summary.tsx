import * as S from "./Summary.styles";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  const summary = transactions.reduce(
    (acc, transaction) => {

      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <S.Container>
      <S.Content>
        <header>
          <p>Entrada</p>
          <img src={income} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </S.Content>
      <S.Content>
        <header>
          <p>Saída</p>
          <img src={outcome} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </S.Content>
      <S.Content className="bgGreen">
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </S.Content>
    </S.Container>
  );
};
