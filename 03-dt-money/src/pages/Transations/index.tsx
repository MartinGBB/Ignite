import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./componets/SearchForm";
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles";


interface Transaction {
  id: number;
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAt: string
}

export function Trasactions() {
const [transaction,setTransaction] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch("http://localhost:3001/transactions")
    const data = await response.json()
    setTransaction(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

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