import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 0,
          title: "Salário",
          type: "deposit",
          amount: "1100",
          category: "Trampo",
          createdAt: new Date("2021-01-15 09:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("transactions", () => {
      // retorna todos os dados adicionados
      return this.schema.all("transactions");
    });
    // schema é o banco de dados do MirajeJS
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      // cria/adiciona os dados ao banco de dados
      return schema.create("transactions", data);
    });
  },
});
ReactDOM.render(<App />, document.getElementById("root"));
