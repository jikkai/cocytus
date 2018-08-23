<section class="c-skill">
  <Title icon="package">{skill.title}</Title>
  {@html $marked(skill.content)}
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
  .c-skill {
    flex: 1;
  }
</style>
