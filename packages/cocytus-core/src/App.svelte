{#if data}
  <Header meta={data.meta} />
  <Intro intro={data.intro} />
  <Content>
    <Exp exp={data.exp} />
    <Skill skill={data.skill} />
  </Content>
{:else}
  Loading...
{/if}

<script>
  import yaml from 'js-yaml'
  import { fetchFile } from './utils'
  import Header from './components/header'
  import Intro from './components/intro'
  import Content from './components/content'
  import Exp from './components/exp'
  import Skill from './components/skill'

  export default {
    data () {
      return {
        data: null
      }
    },

    oncreate () {
      fetchFile('info.yaml')
        .then(text => {
          this.set({
            data: yaml.safeLoad(text, 'utf8')
          })
        })
    },

    components: {
      Header,
      Intro,
      Content,
      Exp,
      Skill
    }
  }
</script>

<style>
  :global(#app) {
    max-width: 720px;
    margin: auto;
  }
</style>
