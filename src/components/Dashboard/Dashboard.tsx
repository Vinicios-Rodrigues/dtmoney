import ExtractTable from "../ExtractTable";
import Summary from "../Summary";
import * as S from "./Dashboard.styles";

export const Dashboard = () => {
  return (
    <S.Container>
      <Summary />
      <ExtractTable />
    </S.Container>
  );
};
