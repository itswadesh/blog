<script>
  import Icon from "svelte-awesome";
  import { bars, phone } from "svelte-awesome/icons";
  import { slide, fade } from "svelte/transition";
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<style>
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
  }
</style>

<div
  class="mb-8 sticky flex shadow-lg justify-around items-center px-6 py-3
  bg-white">
  <a
    href="/"
    rel="prefetch"
    class=" flex items-center text-4xl font-bold text-gray-800">
    <img src={`/logo.png`} alt="" class="h-10" />
    2lessons
  </a>
</div>
