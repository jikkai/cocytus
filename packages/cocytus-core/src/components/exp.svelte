<section class="c-exp">
  <Title icon="briefcase">{exp.title}</Title>

  <ul class="c-timeline">
    {#each exp.timeline as item}
      <li class="c-timeline__item">
        <div class="c-timeline__node">
          {@html $feather.icons['disc'].toSvg()}
        </div>
        <div class="c-timeline__block">
          <time>{item.period}</time>
          <strong>{item.company}</strong>
          {@html $marked(item.desc)}
        </div>
      </li>
    {/each}
  </ul>
</section>

<script>
  import Title from './title'

  export default {
    components: {
      Title
    }
  }
</script>

<style>
  .c-exp {
    padding-right: 18px;
    flex: 1;
  }

  .c-timeline {
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .c-timeline::before {
    position: absolute;
    top: 1px;
    left: 7px;
    content: "";
    height: 100%;
    border-left: 1px dashed var(--default);
  }

  .c-timeline__item {
    position: relative;
  }

  .c-timeline__node {
    position: absolute;
    top: -5px;
    left: 0;
    width: 16px;
    height: 16px;
  }
  .c-timeline__node :global(svg) {
    width: 16px;
    height: 16px;
    fill: var(--white);
  }

  .c-timeline__block {
    margin-left: 32px;
    padding-bottom: 10px;
    font-size: 14px;
  }
  .c-timeline__block time {
    margin-bottom: 6px;
    color: var(--default);
    line-height: 1;
    display: block;
  }
  .c-timeline__block strong {
    font-size: 16px;
  }
  .c-timeline__block :global(p) {
    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>
