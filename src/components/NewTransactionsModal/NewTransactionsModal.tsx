import { useState } from "react";
import Modal from "react-modal";
import closed from "../../assets/close.svg";
import inCome from "../../assets/income.svg";
import outCome from "../../assets/outcome.svg";
import * as S from "./NewTransactionsModal.styles";

// inicia o modal dentro da #root
Modal.setAppElement("#root");

// tipando props
interface props {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionsModal = ({ isOpen, onRequestClose }: props) => {
  const [type, setType] = useState("deposit");
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <S.Container>
        <button type="button" className="close-button" onClick={onRequestClose}>
          <img src={closed} alt="icone de fechar" />
        </button>

        <h2>Cadastrar Transação</h2>

        <S.Input type="text" placeholder="Nome" />
        <S.Input type="number" placeholder="Valor" />

        <S.ContainerButtonType>
          <S.ButtonType
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={inCome} alt="" />
            <span>Entrada</span>
          </S.ButtonType>

          <S.ButtonType
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outCome} alt="" />
            <span>Saida</span>
          </S.ButtonType>
        </S.ContainerButtonType>

        <S.Input type="text" placeholder="Categoria" />
        <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
      </S.Container>
    </Modal>
  );
};
