<section class="c-project">
  <Title icon="package">{project.title}</Title>

  <section class="c-project__notice">{project.notice}</section>
  <ul class="c-project__list">
    {#each project.list as item}
      <li>
        <span>
          <a href="{item.link}">{item.name}</a>
          {@html $feather.icons['external-link'].toSvg({ width: 14, height: 14 })}
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
  }

  .c-project__notice {
    padding: 2px 8px;
    font-size: 14px;
    background: #f7f8fa;
  }

  .c-project__list {
    padding: 0;
    font-size: 14px;
    list-style: none;
  }
  .c-project__list li {
    margin-bottom: 16px;
  }
  .c-project__list span {
    display: flex;
    align-items: center;
  }
  .c-project__list a {
    margin-right: 4px;
    line-height: 1;
    font-size: 16px;
  }
  .c-project__list p {
    margin-top: 4px;
    margin-bottom: 4px;
  }
</style>
