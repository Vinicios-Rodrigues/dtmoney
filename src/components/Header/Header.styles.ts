import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.header`
  width: 100%;
  background: ${Colors.purple};
  height: 12.5rem;
`;

export const Wrapper = styled.div`
  max-width: 67.5rem;
  margin: 0 auto;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: ${Colors.bgButton};
  width: 10rem;
  height: 3rem;
  font-family: "Poppins";
  font-weight: 600;
  color: ${Colors.white};
  border-radius: 0.25rem;
  border: solid 1px ${Colors.bgButton};
  cursor: pointer;
  transition: 0.4s;


  :hover{
    filter: brightness(0.7);
  }
`;
