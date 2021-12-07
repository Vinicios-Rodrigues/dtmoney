import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import closed from "../../assets/close.svg";
import inCome from "../../assets/income.svg";
import outCome from "../../assets/outcome.svg";
import { TransactionsContext } from "../../TransactionsContext";
import * as S from "./NewTransactionsModal.styles";

// inicia o modal dentro da #root
Modal.setAppElement("#root");

// tipando props
interface props {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionsModal = ({ isOpen, onRequestClose }: props) => {
  const [type, setType] = useState("c");

  // contexto, origem da função que cria uma nova transação
  const { createTransaction } = useContext(TransactionsContext);

  // estado dos valores dos inputs do Modal
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  // aguarda a funçao executar, adiciona os dados das transações e fecha o modal
  async function handleCreatNewTransiction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }
  function handleSetTypeDeposit(event: FormEvent) {
    event.preventDefault();
    setType("deposit");
  }

  function handleSetTypeWithDraw(event: FormEvent) {
    event.preventDefault();
    setType("withdraw");
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <S.Container onSubmit={handleCreatNewTransiction}>
        <button type="button" className="close-button" onClick={onRequestClose}>
          <img src={closed} alt="icone de fechar" />
        </button>

        <h2>Cadastrar Transação</h2>

        <S.Input
          type="text"
          placeholder="Nome"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <S.Input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <S.ContainerButtonType>
          <S.ButtonType
            onClick={handleSetTypeDeposit}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={inCome} alt="" />
            <span>Entrada</span>
          </S.ButtonType>

          <S.ButtonType
            onClick={handleSetTypeWithDraw}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outCome} alt="" />
            <span>Saida</span>
          </S.ButtonType>
        </S.ContainerButtonType>

        <S.Input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
      </S.Container>
    </Modal>
  );
};
