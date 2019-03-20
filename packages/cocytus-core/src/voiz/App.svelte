{#if data}
  <Card>
    <Header meta={data.meta} />
  </Card>

  <Card>
    <Intro intro={data.intro} />
  </Card>

  <Content>
    <Card>
      <Exp exp={data.exp} />
    </Card>

    <Card>
      <Project project={data.project} />
    </Card>
  </Content>
  
  <Footer />
{:else}
  Loading...
{/if}

<script>
  import yaml from 'js-yaml'
  import { fetchFile } from './utils'
  import Card from './components/card'
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
      Card,
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
  :global(html) {
    width: 884px;
    color: #383c5c;
    background: #f7f8fa;
    line-height: 1.7;
    font-size: 16px;
    font-weight: 300;
    font-family: -apple-system, 
      "Helvetica Neue", "Arial", "Segoe UI",
      "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei",
      "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC",
      "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC",
      "WenQuanYi Micro Hei", SimSun, sans-serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
  :global(#app) {
    width: 860px;
    margin: auto;
    padding: 24px 0;
  }
  :global(a) {
    color: #5456c6;
    text-decoration: none;
    border-bottom: 1px dotted currentColor;
  }
</style>
