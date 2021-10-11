const { postgraphile } = require("postgraphile");

const pgqlMiddleware = () =>
  postgraphile("postgres://basic:justdoit@localhost:5432/menu_db", "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    //   graphqlRoute: 'http://localhost:3000/graphql'
  });

  export const postgraphilePlugin = {
    name: "postgraphile",
    configureServer(server) {
      server.middlewares.use(
        //   postgraphile(
        //     "postgres://basic:justdoit@localhost:5432/menu_db",
        //     "public",
        //     {
        //       watchPg: true,
        //       graphiql: true,
        //       enhanceGraphiql: true,
        // 	//   graphqlRoute: 'http://localhost:3000/graphql'
        //     }
        //   )
        pgqlMiddleware()
      );
    },
  };
  
module.exports = { pgqlMiddleware, postgraphilePlugin };
