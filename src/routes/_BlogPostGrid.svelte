<script>
  import { lazyload } from "../actions/lazyload";
  import { currency, truncate, date } from "./../lib";
  import { CDN } from "./../config";
  export let post = {};
</script>

<style>
  img {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .zoom {
    overflow: hidden;
  }
  .zoom img {
    transition: transform 0.7s;
  }
  .zoom:hover img {
    transform: scale(1.035);
  }
</style>

{#if post}
  <div class="p-8 w-full lg:w-1/2 rounded overflow-hidden">
    <a
      href={'/' + post.slug + '?id=' + post._id}
      rel="prefetch"
      class="block shadow-md avatar zoom hover:shadow-lg">
      <img
        use:lazyload
        src={'/2x1.png'}
        data-src={`${post.banner}`}
        alt=""
        class="object-cover min-w-full" />
      <div class="px-6 py-4">
        <div class="mb-2 text-3xl font-black">{truncate(post.title, 58)}</div>
        <p class="text-gray-700 text-base">{post.description}</p>
        <div class="author flex items-center text-xs lg:text-sm">
          <div class="font-bold tracking-wide mx-2">{post.source.name}</div>
          <div class="font-bold tracking-wide mx-2">{post.author}</div>
          <div class="text-gray-700 mx-2">{date(post.publishedAt)}</div>
        </div>
      </div>
    </a>
  </div>
{/if}
