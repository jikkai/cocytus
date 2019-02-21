<svelte:head>
	<title>Resume • {meta.name}</title>
</svelte:head>

<header class="c-header">
  <section class="c-header__left">
    <h1>
      {meta.name}
      <span>{meta.nickname}</span>
    </h1>
    <ul>
      <li>
        {@html $feather.icons['cpu'].toSvg()}
        <span>{meta.position}</span>
      </li>
      <li>
        {@html $feather.icons['map-pin'].toSvg()}
        <span>{meta.location}</span>
      </li>
    </ul>
  </section>

  <ul class="c-header__right">
    <li>
      {@html $feather.icons['smartphone'].toSvg()}
      <span>{meta.mobile}</span>
    </li>
    <li>
      {@html $feather.icons['mail'].toSvg()}
      <a href="mailto:{meta.email}">{meta.email}</a>
    </li>
    <li>
      {@html $feather.icons['link'].toSvg()}
      <a href="{meta.link}">{meta.link}</a>
    </li>
  </ul>
</header>

<style>
  .c-header {
    height: 160px;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .c-header__left {
    width: 50%;
    border-right: 1px solid var(--border-color);
  }
  .c-header__left h1 {
    margin: 0;
    font-size: 28px;
  }
  .c-header__left h1 span {
    color: var(--sliver);
    font-size: 16px;
    font-weight: normal;
    font-style: italic;
  }
  .c-header__left :global(svg) {
    color: var(--default);
  }
  .c-header__left ul {
    margin: 0;
    padding: 0;
    color: var(--sliver);
    font-size: 14px;
    font-weight: normal;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .c-header__left li {
    margin-right: 8px;
    color: var(--default);
    display: flex;
    align-items: center;
  }
  .c-header__left :global(svg) {
    width: 14px;
    height: 14px;
    margin-right: 2px;
  }

  .c-header__right {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .c-header__right li {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .c-header__right span {
    color: var(--sliver);
  }
  .c-header__right :global(svg) {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
</style>
