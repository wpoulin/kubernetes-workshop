import express from 'express'
const app = express()

app.get('/', (req, res ) => {
  res.send('Hello 21 Marts')
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log('Listening on http://localhost:' + PORT))
