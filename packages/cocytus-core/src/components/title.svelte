<h2 class="c-title">
  {@html $feather.icons[icon].toSvg()}
  <slot />
</h2>

<style>
  .c-title {
    margin-top: 0;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .c-title :global(svg) {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
</style>
