{#if data}
  <Header meta={data.meta} />
  <Intro intro={data.intro} />
  <Content>
    <Exp exp={data.exp} />
    <Project project={data.project} />
  </Content>
  <Footer />
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
  import Project from './components/project'
  import Footer from './components/footer'

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
      Project,
      Footer
    }
  }
</script>

<style>
  :global(#app) {
    max-width: 860px;
    margin: auto;
  }
</style>
