import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

export const Content = styled.div`
  background: ${Colors.white};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${Colors.text};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
  }
  strong {
    color: ${Colors.title};
    font-size: 2rem;
    font-weight: normal;
  }

  &.bgGreen {
    color: ${Colors.white};
    background: ${Colors.green};

    strong {
      color: ${Colors.white};
    }
  }
`;
