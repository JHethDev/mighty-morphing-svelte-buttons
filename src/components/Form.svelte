<script>
  export let title = 'Signup'
  import { scale, fade } from "svelte/transition";
</script>

<h2 in:scale={{ delay: 600 }} out:fade={{ duration: 250 }}>{title}</h2>
<form>
  <p in:scale={{ delay: 650 }} out:fade={{ duration: 100 }}>
    <label>Email<input autofocus type="text" /></label>
  </p>
  <p in:scale={{ delay: 700 }} out:fade={{ duration: 150 }}>
    <label>Password<input type="password" /></label>
  </p>
  <button class="noblue" on:click|preventDefault in:scale={{ delay: 750 }} out:fade={{ duration: 200 }}>{title}</button>
</form>