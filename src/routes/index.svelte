<script>
  import { operationStore, query } from "@urql/svelte";

  const cities = operationStore(`
  query {
    allCities {
        nodes {
          id
          name
        }
    }
  }
`);

  query(cities);

  $: console.log($cities?.data?.allCities?.nodes);
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<hr />

{#if $cities.fetching}
  <p>Loading...</p>
{:else if $cities.error}
  <p>Oh no... {$cities.error.message}</p>
{:else}
  <ul>
    {#each $cities?.data?.allCities?.nodes as city}
      <li>{city.name}</li>
    {/each}
  </ul>
{/if}
