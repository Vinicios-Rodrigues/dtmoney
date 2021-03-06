import { darken, transparentize } from "polished";
import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    color: ${Colors.title};
    margin-bottom: 2rem;
  }

  .close-button {
    position: absolute;
    background: transparent;
    top: 1.5rem;
    right: 1rem;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const Input = styled.input`
  background: #e7e9ee;
  height: 3rem;
  width: 100%;
  border: 1px solid #d7d7d7d7;
  border-radius: 0.25rem;

  &::placeholder {
    font-size: 1rem;
    padding-left: 1rem;
    color: #969cb2;
  }
  && {
    margin-top: 0.5rem;
  }
`;

export const ContainerButtonType = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  span {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

interface propType {
  isActive: boolean;
  activeColor: "red" | "green";
}

export const ButtonType = styled.button<propType>`
  height: 3rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.85, Colors[props.activeColor])
      : "transparent"};

  border: 1px solid #d7d7d7d7;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${darken(0.15, "#d7d7d7d7")};
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 4rem;
  background: ${Colors.green};
  color: ${Colors.white};
  margin-top: 0.5rem;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
