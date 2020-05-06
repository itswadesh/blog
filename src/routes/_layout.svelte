<script>
  import { stores } from "@sapper/app";
  import Nav from "./../components/Nav.svelte";
  import Footer from "./../components/Footer.svelte";
  import PreloadingIndicator from "./../components/ui/PreloadingIndicator.svelte";
  export let segment;
  const { preloading } = stores();
</script>

{#if $preloading}
  <PreloadingIndicator />
{/if}
<div class="min-h-screen antialiased flex flex-col ">
  <Nav {segment} />
  <div class="mt-12 flex-1">
    <slot />
  </div>
</div>

<Footer />
