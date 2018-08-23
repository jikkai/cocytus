<section class="c-exp">
  <Title icon="briefcase">{exp.title}</Title>

  <ul class="c-timeline">
    {#each exp.timeline as item}
      <li class="c-timeline__item">
        <div class="c-timeline__node"></div>
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
    oncreate () {
      console.log(this.get().exp)
    },
    components: {
      Title
    }
  }
</script>

<style>
  .c-exp {
    padding-right: 10px;
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
    top: 0;
    left: 9px;
    content: "";
    width: 3px;
    height: 100%;
    background: var(--primary);
  }

  .c-timeline__item {
    position: relative;
  }

  .c-timeline__node {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    overflow: hidden;
  }

  .c-timeline__block {
    margin-left: 32px;
  }
  .c-timeline__block time {
    margin-bottom: 6px;
    padding-top: 2px;
    color: var(--default);
    font-size: 14px;
    line-height: 1;
    display: block;
  }
</style>
