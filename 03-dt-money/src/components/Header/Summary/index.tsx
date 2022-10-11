import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleUp, ArrowCircleDown, CurrencyDollar} from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <ArrowCircleUp size={32} color="#00B37E" />
          <span>Entradas</span>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <ArrowCircleDown size={32} color="#F75A68" />
          <span>Saídas</span>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      
      <SummaryCard variant="green">
        <header>
          <CurrencyDollar size={32} color="#FFF" />
          <span>Total</span>
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}