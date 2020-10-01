<script>
  export let blur = false
</script>

<header class:blur>
  <h1><mark>Svelte</mark> Morphing Buttons</h1>
  <p>
    Using a modified version of Svelte's crossfade to morph between separate elements.
  </p>
</header>
<small class:blur>Inspired by this <a href="https://tympanus.net/Development/ButtonComponentMorph/index.html">demo</a> by Mary Lou</small>

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
