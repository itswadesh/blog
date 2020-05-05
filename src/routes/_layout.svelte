<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  export let segment;
</script>

<Header {segment} />
<div style="min-height:71.8vh" class="antialiased ">
  <slot />
</div>

<Footer />
