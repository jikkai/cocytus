<section class="c-project">
  <Title icon="package">{project.title}</Title>

  <section class="c-project__notice">{project.notice}</section>
  <ul class="c-project__list">
    {#each project.list as item}
      <li>
        <span>
          <a href="{item.link}">{item.name}</a>
          {@html $feather.icons['external-link'].toSvg()}
        </span>
        {#if item.desc}
          <p>{item.desc}</p>
        {/if}
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
  .c-project {
    flex: 1;
  }

  .c-project__notice {
    padding: 2px 8px;
    font-size: 14px;
    background: var(--mark-background-color);
  }

  .c-project__list {
    padding: 0;
    font-size: 14px;
    list-style: none;
  }
  .c-project__list span {
    display: flex;
    align-items: center;
  }
  .c-project__list a {
    font-size: 16px;
  }
  .c-project__list :global(svg) {
    width: 14px;
    height: 14px;
    margin-left: 4px;
  }
  .c-project__list p {
    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>
