import { useTransactions } from "../../hooks/useTransactions"

import incomeIMG from "../../assets/income.svg"
import outcomeIMG from "../../assets/outcome.svg"
import totalIMG from "../../assets/total.svg"

import { Container } from "./styles"

export const Summary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withDraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withDraws: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="Entradas" />
        </header>

        <strong>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="saidas" />
        </header>

        <strong>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withDraws)}
        </strong>
      </div>
      <div className="highlight-color">
        <header>
          <p>Total</p>
          <img src={totalIMG} alt="total" />
        </header>

        <strong>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
