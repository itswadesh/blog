<script context="module">
  import { get } from "./../lib/api";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { send, receive } from "./../actions/crossfade";
  import Pagination from "./../components/Pagination.svelte";
  export async function preload({ params, query }) {
    let posts = [],
      err = null,
      loading = false;
    try {
      loading = true;
      let res = await get(`lessons?page=${query.page || 1}`);
      if (!res.data) this.error(500, "Post not found.");
      return { posts: res, query };
    } catch (e) {
      this.error(500, e.toString());
    } finally {
      loading = false;
    }
  }
</script>

<script>
  import { goto, stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  import BlogPostGrid from "./_BlogPostGrid.svelte";
  import { constructQry, constructURL2 } from "./../lib";
  export let posts, query;
  $: noOfPages = Math.ceil(posts.count / posts.pageSize);
  function changePage(e, p) {
    let fl = { ...query };
    delete fl.page;
    const url = constructURL2("/", fl);
    let page = parseInt(e.detail || 1);
    goto(`${url}page=${page}`);
  }
</script>

{#if posts && posts.data}
  <main in:fadeIn out:fadeOut class="mt-18">
    <div class="pattern p-12">
      <div class="items-center text-gray-700 text-xl font-hairline my-2">
        <span class="text-3xl font-bold">{posts.count}</span>
        awesome collection articles
      </div>
      <p>Covering ecommerce, business solutions & technology advancements</p>
    </div>
    <div class="flex flex-wrap justify-center m-2 container mx-auto">
      {#each posts.data as post}
        <BlogPostGrid {post} />
      {/each}
      {noOfPages}
      <Pagination
        count={noOfPages}
        current={parseInt(query.page || 1)}
        on:change={changePage} />
    </div>
  </main>
{/if}
<svelte:head>
  <title>Latest ecommerce technology news</title>
  <meta
    data-hid="description"
    name="description"
    content="Latest ecommerce technology news" />
  <meta
    data-hid="og:title"
    name="og_title"
    content="Latest ecommerce technology news" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Latest ecommerce technology news." />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="600" />
  <!-- Twitter -->
  <meta name="twitter:title" content="Latest ecommerce technology news" />
  <meta name="twitter:description" content="Latest ecommerce technology news" />
  <!-- Google / Schema.org markup: -->
  <meta
    hid="product_name"
    itemprop="name"
    content="Latest ecommerce technology news" />
  <meta
    hid="product_description"
    itemprop="description"
    content="Latest ecommerce technology news" />
</svelte:head>
