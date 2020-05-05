<script context="module">
  import { goto } from "@sapper/app";
  let url;
  export function preload({ query }) {
    url = query.url;
    // window.location.href(query.url);
  }
</script>

<script>
  import { onMount } from "svelte";
  onMount(async () => {
    goto(url);
  });
</script>
