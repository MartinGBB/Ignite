import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAt: string
}


interface TransactionsContextType {
  transaction: Transaction[]
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
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
    <TransactionsContext.Provider value={{ transaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}