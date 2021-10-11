# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

-----------

From Benjie

We don't use or touch native internally; it's an issue with your bundler. Here's how we fixed it in the lambda example (which uses webpack):

1. force it to use native (haha, lies) https://github.com/graphile/postgraphile-lambda-example/blob/6a4a10c0d68714192aa3a881d8896d7e62593f8d/webpack.config.js#L21
2. tell it that the native client is actually the code client   https://github.com/graphile/postgraphile-lambda-example/blob/6a4a10c0d68714192aa3a881d8896d7e62593f8d/webpack.config.js#L28

Such is the nature of software development sometimes.
