import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./service/api"

interface Transaction {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: string
}

// interface TransactionInput {
//   title: string
//   amount: number
//   category: string
//   type: string
// }

// type TransactionInput = Omit<Transaction, "id" | "createdAt">

type TransactionInput = Pick<
  Transaction,
  "title" | "amount" | "category" | "type"
>

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post("/transactions", transactionInput)
    const { transaction } = response.data
    if (response.status !== 201) {
      throw new Error("Erro!")
    }
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
