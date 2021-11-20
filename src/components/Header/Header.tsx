import * as S from "./Header.styles";
import logoImg from "../../assets/logo.svg";

interface props {
  textButton: string;
}
export const Header = (props: props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={logoImg} alt="logo" />
        <S.Button>{props.textButton}</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
