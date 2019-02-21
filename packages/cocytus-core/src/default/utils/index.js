export const decode = text => new TextDecoder('utf-8').decode(text)

export const fetchFile = filename => {
  return window.fetch(`./${filename}`)
    .then(resp => {
      const reader = resp.body.getReader()
      return reader.read()
    })
    .then(resp => {
      return decode(resp.value)
    })
}
