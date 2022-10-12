import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./componets/SearchForm";
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles";

export function Trasactions() {
  const { transaction } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
              {transaction.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                      <td>
                        <PriceHighLight variant={transaction.type}>
                          {transaction.price}
                        </PriceHighLight>
                      </td>
                      <td>{transaction.category}</td>
                    <td>{transaction.createAt}</td>
                  </tr>
                )
              })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}