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
  // contexto, origem da função que cria uma nova transação #Contexto
  const { createTransaction } = useContext(TransactionsContext);

  // estado dos valores dos inputs do Modal

  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  // aguarda a funçao executar, adiciona os dados das transações e fecha o modal
  async function handleCreatNewTransiction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      amount,
      category,
      type,
      title,
    });

    setType("deposit");
    setTitle("");
    setAmount(0);
    setCategory("");
    onRequestClose();
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
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
            type="button"
          >
            <img src={inCome} alt="" />
            <span>Entrada</span>
          </S.ButtonType>

          <S.ButtonType
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
            type="button"
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
