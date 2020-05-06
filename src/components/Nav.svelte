<script>
  import Icon from "svelte-awesome";
  import { bars, phone } from "svelte-awesome/icons";
  import { slide, fade } from "svelte/transition";
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
  export let y;
</script>

<style>
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
  }
</style>

<svelte:window bind:scrollY={y} />
<div
  class={y > 50 ? 'mb-8 flex justify-around items-center py-1 fixed w-full z-10 bg-white lg:opacity-75 shadow-lg blur' : 'mb-8 flex justify-around items-center py-1 fixed w-full z-10 bg-white'}>
  <a
    href="/"
    rel="prefetch"
    class="flex items-center text-4xl font-bold text-gray-800">
    <img src={`/logo.png`} alt="" class="h-10" />
    2lessons
  </a>
</div>
