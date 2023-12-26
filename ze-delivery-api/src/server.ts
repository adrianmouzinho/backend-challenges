import { createServer } from 'node:http'

const server = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/partners') {
    res.write('oi')
    res.statusCode = 200
    return res.end()
  }
})

server.listen(3333, () => { console.log('HTTP Server running on port 3333') })
