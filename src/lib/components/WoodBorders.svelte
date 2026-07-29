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
    position: fixed;
    top: 0;
    bottom: 0;
    width: var(--width);
    background-image: url('/layoutleft.png');
    background-repeat: repeat-y;
    background-size: 100% auto;
    pointer-events: none;
    z-index: 50;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
    transform: scaleX(-1);
  }

  @media (max-width: 768px) {
    .wood-border {
      width: var(--mobile-width);
    }
  }
</style>