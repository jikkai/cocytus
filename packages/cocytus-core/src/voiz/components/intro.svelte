<section class="c-intro">
  <Title icon="crosshair">{intro.title}</Title>
  <blockquote>{@html $marked(intro.content)}</blockquote>
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
  .c-intro {
  }

  .c-intro blockquote {
    margin-left: 0;
    margin-bottom: 0;
  }
</style>
