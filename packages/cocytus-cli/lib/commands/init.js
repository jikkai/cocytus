const fs = require('fs-extra')
const consola = require('consola')
const utils = require('../../utils')

module.exports = target => {
  const dest = utils.path.cwd(target)

  consola.start('Creating...')
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }

  const src = utils.path.resolve(__dirname, '../../themes/default')
  fs.copy(src, dest)
    .then(() => {
      consola.success('Done!')
    })
}
