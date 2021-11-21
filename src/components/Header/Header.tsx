import * as S from "./Header.styles";
import logoImg from "../../assets/logo.svg";

interface props {
  textButton: string;
  onOpenNewTransactionModal: () => void;
}
export const Header = ({ textButton, onOpenNewTransactionModal }: props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={logoImg} alt="logo" />
        <S.Button onClick={() => onOpenNewTransactionModal()}>
          {textButton}
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
