module.exports = {
  '*': 'pretty-quick  --staged',
  '**/*.(ts|md)?(x)': () => 'yarn type-check',
  '**/*.(ts|js|md)?(x)': (filenames) => {
    const files = filenames.join(' ')
    return [`yarn lint ${files}`]
  },
}
