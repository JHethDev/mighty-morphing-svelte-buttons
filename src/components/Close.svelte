<script>
  import { fade } from "svelte/transition"
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  function close() {
    dispatch("close")
  }
</script>

<button class="noblue" in:fade={{ delay: 600 }} out:fade={{ duration: 100 }} on:click={close}>
  <svg
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="4"
    viewBox="0 0 24 24">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
</button>

<style>
  button {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    padding: 0 0.5rem;
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: #ebd3bd;
  }
  button:hover {
    color: #7284b7;
  }
  button:active {
    background: none;
  }
  svg {
    display: block;
    height: 20px;
    width: 20px;
  }
</style>
