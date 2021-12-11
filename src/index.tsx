import React from "react"
import ReactDOM from "react-dom"
import { createServer, Model } from "miragejs"
import { App } from "./App"

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer",
          amount: 6000,
          category: "Dev",
          type: "deposit",
          createdAt: new Date("11/23/2021 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1000,
          category: "Case",
          type: "withdraw",
          createdAt: new Date("11/21/2021 17:00:00"),
        },
      ],
    })
  },
  routes() {
    this.namespace = "api"
    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", { ...data, createdAt: new Date() })
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)