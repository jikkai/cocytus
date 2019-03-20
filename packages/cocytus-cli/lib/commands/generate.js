const http = require('http')
const fs = require('fs-extra')
const consola = require('consola')
const serveStatic = require('serve-static')
const renderPDF = require('chrome-headless-render-pdf')
const utils = require('../../utils')

module.exports = target => {
  const path = utils.path.cwd(target)

  consola.start('Generating...')
  if (fs.existsSync(path)) {
    const server = http.createServer((req, resp) => {
      serveStatic(path)(req, resp)
    }).listen(3000, () => {
      renderPDF.generateSinglePdf('http://localhost:3000', 'resume.pdf', {
        includeBackground: true
      })
        .then(() => {
          server.close(() => {
            consola.success('Done!')
          })
        })
    })
  }
}
