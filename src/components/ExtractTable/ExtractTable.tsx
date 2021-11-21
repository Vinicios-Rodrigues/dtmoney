import { useEffect } from "react";
import { api } from "../../services/api";
import * as S from "./ExtractTable.styles";

export const ExtractTable = () => {
  useEffect(() => {
    api("http://localhost:3000/api/transactions").then((response) =>
      console.log(response.data)
    );
  }, []);
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria </th>
            <th>Data </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desevolvimento</td>
            <td className="deposit">R$ 12.0000</td>
            <td>Venda</td>
            <td>15/01/2002</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="widthdraw">R$ -50,00</td>
            <td>Food</td>
            <td>15/01/2002</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};
