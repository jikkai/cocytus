<section class="c-skill">
  <Title icon="package">{skill.title}</Title>
</section>

<script>
  import Title from './title.svelte'

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
