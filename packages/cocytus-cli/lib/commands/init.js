const fs = require('fs-extra')
const consola = require('consola')
const inquirer = require('inquirer')
const utils = require('../../utils')

module.exports = async target => {
  const dest = utils.path.cwd(target)

  consola.start('Creating...')
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }

  const { theme } = await inquirer.prompt([{
    name: 'theme',
    type: 'list',
    message: 'Please Select a theme:',
    choices: [
      { name: 'Default', value: 'default' },
      { name: 'Voiz', value: 'voiz' }
    ]
  }])

  const src = utils.path.resolve(__dirname, '../../template')

  fs.copySync(src, dest)

  const indexPath = `${dest}/index.html`
  const outputIndex = fs.readFileSync(indexPath).toString()
  const resultIndex = outputIndex.replace(/{{theme}}/g, theme)
  fs.writeFileSync(indexPath, resultIndex)

  consola.success('Done!')
}
