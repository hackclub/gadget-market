<script>
  let { width = 60, mobileWidth = 30 } = $props();
</script>

<div
  class="wood-border left"
  style="--width: {width}px; --mobile-width: {mobileWidth}px"
  aria-hidden="true"
></div>
<div
  class="wood-border right"
  style="--width: {width}px; --mobile-width: {mobileWidth}px"
  aria-hidden="true"
></div>

<style>
  .wood-border {
    position: absolute;
    top: 0;
    height: 100%;
    width: var(--width);
    background-image: url('/layoutleft.png');
    background-repeat: repeat-y;
    background-size: 100% auto;
    pointer-events: none;
    z-index: -1;
    image-rendering: pixelated;
    opacity: 0;
    animation: slide-in-x 350ms ease-out forwards;
  }

  .left {
    left: 0;
    --from-x: -100%;
    animation-delay: 100ms;
  }

  .right {
    right: 0;
    transform: scaleX(-1);
    --from-x: 100%;
    animation-delay: 400ms;
  }

  @keyframes slide-in-x {
    from {
      opacity: 0;
      translate: var(--from-x) 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @media (max-width: 768px) {
    .wood-border {
      width: var(--mobile-width);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wood-border {
      animation: none;
      opacity: 1;
    }
  }
</style>