import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.header`
  width: 100%;
  background: ${Colors.purple};
`;

export const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 1rem 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: ${Colors.bgButton};
  padding:1rem 2rem;
  height: 3rem;
  font-family: "Poppins";
  font-weight: 600;
  color: ${Colors.white};
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    filter: brightness(0.9);
  }
`;
