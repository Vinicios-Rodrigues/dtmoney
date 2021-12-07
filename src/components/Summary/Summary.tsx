import * as S from "./Summary.styles";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <S.Container>
      <S.Content>
        <header>
          <p>Entrada</p>
          <img src={income} alt="" />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.Content>
      <S.Content>
        <header>
          <p>Saída</p>
          <img src={outcome} alt="" />
        </header>
        <strong>1.259,00</strong>
      </S.Content>
      <S.Content className="bgGreen">
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>R$16.141,00</strong>
      </S.Content>
    </S.Container>
  );
};
