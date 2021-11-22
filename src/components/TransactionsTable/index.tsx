import { useEffect } from "react"
import { api } from "../../service/api"
import { Container } from "./styles"

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/11/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/11/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/11/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="withdraw">-R$12.000</td>
            <td>Desenvolvimento</td>
            <td>21/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
