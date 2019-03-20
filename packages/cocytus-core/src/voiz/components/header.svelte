<svelte:head>
	<title>Resume • {meta.name}</title>
</svelte:head>

<header class="c-header">
  <section class="c-header__left">
    <h1>
      <ruby>
        {meta.name} <rt>{meta.nickname}</rt>
      </ruby>
    </h1>
    <ul>
      <li>
        <label class="c-header__icon">
          {@html $feather.icons['cpu'].toSvg(featherOpts)}
        </label>
        <span>{meta.position}</span>
      </li>
      <li>
        <label class="c-header__icon">
          {@html $feather.icons['map-pin'].toSvg(featherOpts)}
        </label>
        <span>{meta.location}</span>
      </li>
    </ul>
  </section>

  <ul class="c-header__right">
    <li>
      <label class="c-header__icon">
        {@html $feather.icons['smartphone'].toSvg(featherOpts)}
      </label>
      <span>{meta.mobile}</span>
    </li>
    <li>
      <label class="c-header__icon">
        {@html $feather.icons['mail'].toSvg(featherOpts)}
      </label>
      <a href="mailto:{meta.email}">{meta.email}</a>
    </li>
    <li>
      <label class="c-header__icon">
        {@html $feather.icons['link'].toSvg(featherOpts)}
      </label>
      <a href="{meta.link}">{meta.link}</a>
    </li>
  </ul>
</header>

<script>
  export default {
    data () {
      return {
        featherOpts: {
          width: 12,
          height: 12
        }
      }
    }
  }
</script>

<style>
  .c-header {
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .c-header__icon {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    background: #f7f8fa;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .c-header__left {
  }
  .c-header__left h1 {
    margin: 0 0 12px 0;
    font-size: 22px;
  }
  .c-header__left rt {
    font-weight: 300;
    font-style: italic;
  }
  .c-header__left ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }
  .c-header__left li {
    margin-right: 10px;
    line-height: 1;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .c-header__right {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .c-header__right li {
    margin-bottom: 4px;
    line-height: 1;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
</style>
