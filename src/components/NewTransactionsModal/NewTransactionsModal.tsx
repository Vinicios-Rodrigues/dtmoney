import Modal from "react-modal";
import closed from "../../assets/close.svg";
import inCome from "../../assets/income.svg";
import outCome from "../../assets/outcome.svg";
import * as S from "./NewTransactionsModal.styles";

Modal.setAppElement("#root");

interface props {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionsModal = ({ isOpen, onRequestClose }: props) => {
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
          <button>
            <img src={inCome} alt="" />
            <span>Entrada</span>
          </button>
          <button>
            <img src={outCome} alt="" />
            <span>Saida</span>
          </button>{" "}
        </S.ContainerButtonType>
        <S.Input type="text" placeholder="Categoria" />
        <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
      </S.Container>
    </Modal>
  );
};
