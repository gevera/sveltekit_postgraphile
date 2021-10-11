import {
  assetsMiddleware,
  prerenderedMiddleware,
  kitMiddleware,
} from "../build/middlewares.js";
import polka from "polka";
import { postgraphile } from "postgraphile";

const app = polka();

app.use(
  postgraphile("postgres://basic:justdoit@localhost:5432/menu_db", "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    //   graphqlRoute: 'http://localhost:3000/graphql'
  })
);

app.get("/no-svelte", (req, res) => {
  res.end("This is not Svelte!");
});

app.use(assetsMiddleware, prerenderedMiddleware, kitMiddleware);

app.listen(3000);
