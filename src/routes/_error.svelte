<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>2lessons - {status}</title>
</svelte:head>
<div class="my-16 mx-auto lg:mx-48">
  <h1 class="text-4xl text-center">{status}-{error.message}</h1>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
