import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: ${Colors.title};
    padding: 1rem 2rem;
    font-weight: 400;
    text-align: left;
    line-height: 1, 5rem;
  }

  td {
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    background: ${Colors.white};
    color: ${Colors.text};

    &:first-child {
      color: ${Colors.title};
    }

    &.deposit {
      color: ${Colors.green};
    }

    &.widthdraw {
      color: ${Colors.red};
    }
  }
`;
