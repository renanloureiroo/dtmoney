import { useEffect, useState } from "react"
import { api } from "../../service/api"
import { Container } from "./styles"

interface TransactionsProps {
  id: number
  title: string
  amount: number
  category: string
  type: string
  created_at: Date
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<TransactionsProps[]>()
  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data))
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
          {transactions &&
            transactions.map((transaction) => (
              <tr>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}
