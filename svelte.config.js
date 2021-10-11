/** @type {import('@sveltejs/kit').Config} */
import { postgraphile } from "postgraphile";

import node from "@sveltejs/adapter-node";
// import { postgraphilePlugin } from "./src/utils/postgraphile";

export const postgraphilePlugin = {
  name: "postgraphile",
  configureServer(server) {
    server.middlewares.use(
      postgraphile(
        "postgres://user:password@localhost:5432/some_db",
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
    adapter: node({
      entryPoint: "./src/server.js",
    }),
    target: "#svelte",
    vite: {
      plugins: [postgraphilePlugin],
      ssr: {
        external: ["pg-native"],
      },
      optimizeDeps: {
        include: [],
        exclude: ["pg-native"],
      },
    },
  },
};

export default config;
