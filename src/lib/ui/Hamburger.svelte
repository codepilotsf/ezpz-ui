<!--
@component

## Hamburger Button
Include this button and toggle the class "active" on 
its parent element to animate.

Configure the button by changing the variables below.
For number of spins, be sure to use odd numbers only
so the button ends up in the correct position.
-->
<script>
  // prettier-ignore
  let {
    active = false,
    class: _class = '',
  } = $props()

  function toggleActive() {
    active = !active
  }
</script>

<hamburger-button
  class={`lib-ui cursor-pointer md:hidden ${_class}`}
  class:active
  on:click={toggleActive}
  role="button"
  tabindex="0"
  on:keydown|preventDefault={(e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleActive()
  }}
>
  <line-1 />
  <line-2 />
  <line-3 />
</hamburger-button>

<style>
  /* Variables 
  -----------------------------*/
  hamburger-button {
    --button-width: 24px;
    --button-height: 18px;

    --line-thickness: 2px;
    --line-color: var(--ui-dark);
    --line-radius: 2px;
    --number-of-spins: 5;
    --duration: 0.15s;
  }
  /* ------------------------- */

  hamburger-button {
    position: relative;
    display: block;
    width: var(--button-width);
    height: var(--button-height);
  }

  hamburger-button > line-1,
  hamburger-button > line-2,
  hamburger-button > line-3 {
    position: absolute;
    display: block;
    width: 100%;
    height: var(--line-thickness);
    background-color: var(--line-color);
    border-radius: var(--line-radius);
    transition: all var(--duration) ease-in-out;
  }

  hamburger-button > line-2 {
    top: calc(50% - var(--line-thickness) / 2);
  }

  hamburger-button > line-3 {
    bottom: 0;
  }

  hamburger-button.active > line-1 {
    transform: translateY(
        calc(var(--button-height) / 2 - var(--line-thickness) / 2)
      )
      rotate(calc(-1 * 45deg * var(--number-of-spins)));
  }

  hamburger-button.active > line-2 {
    opacity: 0;
  }

  hamburger-button.active > line-3 {
    transform: translateY(
        calc(-1 * (var(--button-height) / 2 - var(--line-thickness) / 2))
      )
      rotate(calc(45deg * var(--number-of-spins)));
  }
</style>
