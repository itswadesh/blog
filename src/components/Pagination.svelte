<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let count = 10,
    current = 1
  count = parseInt(count)
  $: pages = count > 10 ? 10 : count
</script>

<style>
  .active {
    color: #fff;
    background-color: #282c3f;
  }
</style>

{#if count > 1}
  <div class="mx-6 flex flex-col md:flex-row justify-between items-center">
    <div class="text-gray-500 items-center">Page {current} of {count}</div>
    <div class="flex-1 flex items-center text-center justify-between w-full">
      {#if current > 1}
        <button
          rel="prev"
          class="lg:mx-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold
          lg:py-2 p-2 lg:px-4 border border-gray-400 rounded shadow rounded
          inline-flex items-center"
          on:click={() => dispatch('change', current - 1)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289
              16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289
              9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711
              3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421
              9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17
              11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166
              9.70711 16.7071Z"
              fill="#4A5568" />
          </svg>
          &nbsp;
          <span>Previous</span>
        </button>
      {/if}
      <div class="hidden md:block">
        {#each { length: pages } as _, i}
          <button
            class="py-1 px-2 lg:mx-2 w-8 h-8 rounded-full border
            hover:border-gray-500"
            class:active={current === i + 1}
            on:click={() => dispatch('change', i + 1)}>
            {i + 1}
          </button>
        {/each}
      </div>
      {#if current < count}
        <button
          rel="next"
          class="lg:mx-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold
          lg:py-2 p-2 lg:px-4 border border-gray-400 rounded shadow rounded
          inline-flex items-center"
          on:click={() => dispatch('change', current + 1)}>
          <span>Next</span>
          &nbsp;
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071
              3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071
              10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929
              16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858
              11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3
              9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929
              3.29289Z"
              fill="#4A5568" />
          </svg>

        </button>
      {/if}
    </div>
  </div>
{/if}
