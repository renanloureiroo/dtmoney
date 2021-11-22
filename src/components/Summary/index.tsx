import { Container } from "./styles"

import incomeIMG from "../../assets/income.svg"
import outcomeIMG from "../../assets/outcome.svg"
import totalIMG from "../../assets/total.svg"

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="Entradas" />
        </header>

        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="saidas" />
        </header>

        <strong>R$500</strong>
      </div>
      <div className="highlight-color">
        <header>
          <p>Entradas</p>
          <img src={totalIMG} alt="total" />
        </header>

        <strong>R$500</strong>
      </div>
    </Container>
  )
}
