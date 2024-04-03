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
    active = $bindable(false),
    class: _class = '',
  } = $props()

  function toggleActive() {
    active = !active
  }
</script>

<ui-hamburger
  class={`lib-ui hamburger cursor-pointer ${_class}`}
  class:active
  on:click={toggleActive}
  role="button"
  tabindex="0"
  on:click
  on:keydown|preventDefault={(e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleActive()
  }}
>
  <ui-hamburger-inner>
    <line-1 />
    <line-2 />
    <line-3 />
  </ui-hamburger-inner>
</ui-hamburger>

<style>
  /* Instance Styles
  -----------------------------*/
  ui-hamburger {
    --ui-this-width: var(--ui-hamburger-width, 30px);
    --ui-this-height: var(
      --ui-hamburger-height,
      calc(var(--ui-this-width) * 0.75)
    );
    --ui-this-padding: var(
      --ui-hamburger-padding,
      calc(var(--ui-this-width) * 0.3)
    );
    --ui-this-background: var(--ui-hamburger-background, transparent);
    --ui-this-border-radius: var(
      --ui-hamburger-border-radius,
      var(--ui-border-radius, 3px)
    );
    --ui-this-border: var(--ui-hamburger-border, none);
    --ui-this-line-color: var(--ui-hamburger-line-color, var(--ui-dark, #222));
    --ui-this-line-thickness: var(--ui-hamburger-line-thickness, 2px);
    --ui-this-line-radius: var(--ui-hamburger-line-radius, 2px);
    --ui-this-spins-number: var(--ui-hamburger-spins-number, 5);
    --ui-this-spins-duration: var(--ui-hamburger-spins-duration, 150ms);
  }

  ui-hamburger {
    display: inline-block;
    padding: var(--ui-this-padding);
    margin: calc(var(--ui-this-padding) * -1);
    background-color: var(--ui-this-background);
    border-radius: var(--ui-this-border-radius);
  }

  ui-hamburger-inner {
    position: relative;
    display: block;
    width: var(--ui-this-width);
    height: var(--ui-this-height);
  }

  line-1,
  line-2,
  line-3 {
    position: absolute;
    display: block;
    width: 100%;
    height: var(--ui-this-line-thickness);
    background-color: var(--ui-this-line-color);
    border-radius: var(--ui-this-line-radius);
    transition: all var(--ui-this-spins-duration) ease-in-out;
  }

  line-2 {
    top: calc(50% - var(--ui-this-line-thickness) / 2);
  }

  line-3 {
    bottom: 0;
  }

  .active line-1 {
    transform: translateY(
        calc(var(--ui-this-height) / 2 - var(--ui-this-line-thickness) / 2)
      )
      rotate(calc(-1 * 45deg * var(--ui-this-spins-number)));
  }

  .active line-2 {
    opacity: 0;
  }

  .active line-3 {
    transform: translateY(
        calc(
          -1 * (var(--ui-this-height) / 2 - var(--ui-this-line-thickness) / 2)
        )
      )
      rotate(calc(45deg * var(--ui-this-spins-number)));
  }
</style>
