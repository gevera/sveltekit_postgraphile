import { initClient } from "@urql/svelte";

export const urqlClient = () =>
  initClient({
    url: "http://localhost:3000/graphql",
  });
