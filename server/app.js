const app = require('express')()

const port = 8000

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res) => {
  res.send('Search boi')
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
