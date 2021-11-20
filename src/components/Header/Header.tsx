import * as S from "./Header.styles";
import logoImg from '../../assets/logo.svg'
export const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
          <img src={logoImg}alt="logo" />
          <S.Button >Nova transação</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
