<script>
  export let blur = false;
</script>

<header class:blur>
  <h1>Mighty Morphing <mark>Svelte</mark> Buttons</h1>
  <p>
    Using a modified version of Svelte's crossfade to morph between separate elements.
  </p>
</header>
<small class:blur>
  Inspiration: this <a href="https://tympanus.net/Development/ButtonComponentMorph/index.html">demo</a> by Mary Lou<br />
  100% Svelte, no dependencies<br />
  <a href="https:github.com/jhethdev/mighty-morphing-svelte-buttons"> 
    Fork this on Github
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      height="16"
      width="16"
      viewBox="0 0 24 24">
      <defs />
      <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  </a>
</small>

<style>
  header {
    text-align: center;
    margin-bottom: 2rem;
    transition: all 0.3s ease 0.3s;
  }
  small {
    padding: 1.25rem;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.3s ease 0.3s;
  }
  a {
    display: inline;
  }
</style>