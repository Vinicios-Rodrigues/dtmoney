import Modal from "react-modal";

Modal.setAppElement("#root");

interface props {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionsModal = ({ isOpen, onRequestClose }: props) => {
  return <Modal isOpen={isOpen} onRequestClose={onRequestClose}></Modal>;
};
