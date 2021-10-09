/** @type {import('@sveltejs/kit').Config} */
import { postgraphile } from "postgraphile";
import node from "@sveltejs/adapter-node";
const postgraphilePlugin = {
  name: "postgraphile",
  configureServer(server) {
    server.middlewares.use(
      postgraphile(
        "postgres://postgres_user:password@localhost:5432/some_db",
        "public",
        {
          watchPg: true,
          graphiql: true,
          enhanceGraphiql: true,
		//   graphqlRoute: 'http://localhost:3000/graphql'
        }
      )
    );
  },
};
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: node(),
    target: "#svelte",
    vite: {
      plugins: [postgraphilePlugin],
    },
  },
};

export default config;
