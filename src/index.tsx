import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
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
