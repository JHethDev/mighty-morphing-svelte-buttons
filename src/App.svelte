<script>
  import { scale, fade } from "svelte/transition"
  import { crossmorph } from "./transitions/crossmorph.js"
  import { quintIn } from "svelte/easing"
  import { Close, Intro, Form } from "./components/index"

  let easing = quintIn,
    duration = 400,
    delay = 250,
    keyCode,
    showSignup = false,
		showLogin = false,
		fadein = false

  const [send, receive] = crossmorph({
    duration,
    easing,
    delay,
    fallback: scale
  })

  function openLogin() {
    showLogin = true
  }
  function hideLogin() {
    showLogin = false
  }
  function openSignup() {
    showSignup = true
  }
  function hideSignup() {
    showSignup = false
  }
  function handleKeydown(event) {
    keyCode = event.keyCode
    if (keyCode == 27) {
        hideSignup()
        hideLogin()
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  <Intro blur={showSignup || showLogin} />
  <div class="grid">
    {#if !showLogin}
      <button
        class="login"
        class:blur={showSignup}
        class:active={showLogin}
        on:click={openLogin}
        in:receive={{ key: 'login' }}
        out:send={{ key: 'login' }}>
        <span
          style="z-index: 9"
					out:fade={{ duration: 550 }}
					on:outroend={()=> fadein = true}
          in:fade={{ delay: duration + 100 }}>Login</span>
      </button>
    {/if}
    {#if !showSignup}
      <button
        class="signup"
        class:blur={showLogin}
        class:active={showSignup}
        on:click={openSignup}
        in:receive={{ key: 'signup' }}
        out:send={{ key: 'signup' }}>
        <span
          style="z-index: 9"
					out:fade={{ duration: 550 }}
					on:outroend={()=> fadein = true}
          in:fade={{ delay: duration + 100 }}>Signup</span>
      </button>
    {/if}
  </div>

  {#if showLogin}
    <div class="pop-grid" class:fadein>
      <div
        class="pop"
        in:receive={{ key: 'login' }}
        out:send={{ key: 'login' }}>
        <Close on:close={hideLogin} />
        <Form title="Login" />
      </div>
    </div>
  {/if}
  {#if showSignup}
    <div class="pop-grid" class:fadein>
      <div
        class="pop"
        in:receive={{ key: 'signup' }}
        out:send={{ key: 'signup' }}>
        <Close on:close={hideSignup} />
        <Form />
      </div>
    </div>
  {/if}
  {#if showLogin || showSignup}<span in:fade out:fade={{ delay: 450 }} class="overlay" />{/if}
</main>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding-top: 5rem;
  }

  .login {
    grid-area: 1 / 1 / 2 / 2;
  }
  .signup {
    grid-area: 1 / 2 / 1 / 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #0000008a;
    content: "";
    opacity: 1;
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
    pointer-events: none;
  }

  .pop-grid {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
		place-content: center;
		opacity: 0;
		transform: opacity .9s ease-out;
	}
	.fadein {
		opacity: 1;
	}
  .pop {
    background-color: #3d3f46;
    width: 340px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    z-index: 2;
    position: relative;
    box-sizing: border-box;
    will-change: transform;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
		border-radius: var(--roundness);
  }
</style>
