<script>
  let {
    variant = 'circle-bars',
    size = 'md',
    color = 'var(--ui-focus)',
    class: _class = '',
    ...other
  } = $props()

  const sizes = {
    xs: '16px',
    sm: '26px',
    md: '42px',
    lg: '68px',
    xl: '110px',
  }
</script>

<!-- https://github.com/n3r4zzurr0/svg-spinners -->

<ui-spinner
  class={['lib-ui', _class].join(' ')}
  style={`color: ${color}`}
  {...other}
>
  {#if variant === 'circle-bars'}
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <style>
        .spinner_OSmW {
          transform-origin: center;
          animation: spinner_T6mA 0.75s step-end infinite;
        }
        @keyframes spinner_T6mA {
          8.3% {
            transform: rotate(30deg);
          }
          16.6% {
            transform: rotate(60deg);
          }
          25% {
            transform: rotate(90deg);
          }
          33.3% {
            transform: rotate(120deg);
          }
          41.6% {
            transform: rotate(150deg);
          }
          50% {
            transform: rotate(180deg);
          }
          58.3% {
            transform: rotate(210deg);
          }
          66.6% {
            transform: rotate(240deg);
          }
          75% {
            transform: rotate(270deg);
          }
          83.3% {
            transform: rotate(300deg);
          }
          91.6% {
            transform: rotate(330deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style><g class="spinner_OSmW"
        ><rect x="11" y="1" width="2" height="5" opacity=".14" /><rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(30 12 12)"
          opacity=".29"
        /><rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(60 12 12)"
          opacity=".43"
        /><rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(90 12 12)"
          opacity=".57"
        /><rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(120 12 12)"
          opacity=".71"
        /><rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(150 12 12)"
          opacity=".86"
        /><rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(180 12 12)"
        /></g
      ></svg
    >
  {/if}

  {#if variant === 'circle-dots'}
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ><style>
        .spinner_DupU {
          animation: spinner_sM3D 1.2s infinite;
        }
        .spinner_GWtZ {
          animation-delay: 0.1s;
        }
        .spinner_dwN6 {
          animation-delay: 0.2s;
        }
        .spinner_46QP {
          animation-delay: 0.3s;
        }
        .spinner_PD82 {
          animation-delay: 0.4s;
        }
        .spinner_eUgh {
          animation-delay: 0.5s;
        }
        .spinner_eUaP {
          animation-delay: 0.6s;
        }
        .spinner_j38H {
          animation-delay: 0.7s;
        }
        .spinner_tVmX {
          animation-delay: 0.8s;
        }
        .spinner_DQhX {
          animation-delay: 0.9s;
        }
        .spinner_GIL4 {
          animation-delay: 1s;
        }
        .spinner_n0Yb {
          animation-delay: 1.1s;
        }
        @keyframes spinner_sM3D {
          0%,
          50% {
            animation-timing-function: cubic-bezier(0, 1, 0, 1);
            r: 0;
          }
          10% {
            animation-timing-function: cubic-bezier(0.53, 0, 0.61, 0.73);
            r: 2px;
          }
        }
      </style><circle class="spinner_DupU" cx="12" cy="3" r="0" /><circle
        class="spinner_DupU spinner_GWtZ"
        cx="16.50"
        cy="4.21"
        r="0"
      /><circle
        class="spinner_DupU spinner_n0Yb"
        cx="7.50"
        cy="4.21"
        r="0"
      /><circle
        class="spinner_DupU spinner_dwN6"
        cx="19.79"
        cy="7.50"
        r="0"
      /><circle
        class="spinner_DupU spinner_GIL4"
        cx="4.21"
        cy="7.50"
        r="0"
      /><circle
        class="spinner_DupU spinner_46QP"
        cx="21.00"
        cy="12.00"
        r="0"
      /><circle
        class="spinner_DupU spinner_DQhX"
        cx="3.00"
        cy="12.00"
        r="0"
      /><circle
        class="spinner_DupU spinner_PD82"
        cx="19.79"
        cy="16.50"
        r="0"
      /><circle
        class="spinner_DupU spinner_tVmX"
        cx="4.21"
        cy="16.50"
        r="0"
      /><circle
        class="spinner_DupU spinner_eUgh"
        cx="16.50"
        cy="19.79"
        r="0"
      /><circle
        class="spinner_DupU spinner_j38H"
        cx="7.50"
        cy="19.79"
        r="0"
      /><circle class="spinner_DupU spinner_eUaP" cx="12" cy="21" r="0" /></svg
    >
  {/if}

  {#if variant === 'circle-strip'}
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ><style>
        .spinner-circle-strip {
          transform-origin: center;
          animation: spinner_StKS 0.75s infinite linear;
        }
        @keyframes spinner_StKS {
          100% {
            transform: rotate(360deg);
          }
        }
      </style><path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      /><path
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        class="spinner-circle-strip"
      /></svg
    >
  {/if}

  {#if variant === 'dots-bounce'}
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ><style>
        .spinner_qM83 {
          animation: spinner_8HQG 1.05s infinite;
        }
        .spinner_oXPr {
          animation-delay: 0.1s;
        }
        .spinner_ZTLf {
          animation-delay: 0.2s;
        }
        @keyframes spinner_8HQG {
          0%,
          57.14% {
            animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
            transform: translate(0);
          }
          28.57% {
            animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
            transform: translateY(-6px);
          }
          100% {
            transform: translate(0);
          }
        }
      </style><circle class="spinner_qM83" cx="4" cy="12" r="3" /><circle
        class="spinner_qM83 spinner_oXPr"
        cx="12"
        cy="12"
        r="3"
      /><circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3" /></svg
    >
  {/if}

  {#if variant === 'dots-fade'}
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ><style>
        .spinner_S1WN {
          animation: spinner_MGfb 0.8s linear infinite;
          animation-delay: -0.8s;
        }
        .spinner_Km9P {
          animation-delay: -0.65s;
        }
        .spinner_JApP {
          animation-delay: -0.5s;
        }
        @keyframes spinner_MGfb {
          93.75%,
          100% {
            opacity: 0.2;
          }
        }
      </style><circle class="spinner_S1WN" cx="4" cy="12" r="3" /><circle
        class="spinner_S1WN spinner_Km9P"
        cx="12"
        cy="12"
        r="3"
      /><circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" /></svg
    >
  {/if}

  {#if variant === 'dots-scale'}
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ><style>
        .spinner_b2T7 {
          animation: spinner_xe7Q 0.8s linear infinite;
        }
        .spinner_YRVV {
          animation-delay: -0.65s;
        }
        .spinner_c9oY {
          animation-delay: -0.5s;
        }
        @keyframes spinner_xe7Q {
          93.75%,
          100% {
            r: 3px;
          }
          46.875% {
            r: 0.2px;
          }
        }
      </style><circle class="spinner_b2T7" cx="4" cy="12" r="3" /><circle
        class="spinner_b2T7 spinner_YRVV"
        cx="12"
        cy="12"
        r="3"
      /><circle class="spinner_b2T7 spinner_c9oY" cx="20" cy="12" r="3" /></svg
    >
  {/if}

  {#if variant === 'dots-shuffle'}
    <svg
      width={sizes[size]}
      height={sizes[size]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      ><style>
        .spinner_nOfF {
          animation: spinner_qtyZ 2s cubic-bezier(0.36, 0.6, 0.31, 1) infinite;
        }
        .spinner_fVhf {
          animation-delay: -0.5s;
        }
        .spinner_piVe {
          animation-delay: -1s;
        }
        .spinner_MSNs {
          animation-delay: -1.5s;
        }
        @keyframes spinner_qtyZ {
          0% {
            r: 0;
          }
          25% {
            r: 3px;
            cx: 4px;
          }
          50% {
            r: 3px;
            cx: 12px;
          }
          75% {
            r: 3px;
            cx: 20px;
          }
          100% {
            r: 0;
            cx: 20px;
          }
        }
      </style><circle class="spinner_nOfF" cx="4" cy="12" r="3" /><circle
        class="spinner_nOfF spinner_fVhf"
        cx="4"
        cy="12"
        r="3"
      /><circle class="spinner_nOfF spinner_piVe" cx="4" cy="12" r="3" /><circle
        class="spinner_nOfF spinner_MSNs"
        cx="4"
        cy="12"
        r="3"
      /></svg
    >
  {/if}
</ui-spinner>

<style>
  ui-spinner {
    display: inline-block;
    color: var(--ui-color);
  }
</style>
