const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./database.json') // тут путь к вашему json в котором данные хранятся или их структура просто, если нет предзаполненных
const middleware = jsonServer.defaults()

server.use((req, res, next) => {
	setTimeout(next, 1000)
})
server.use(middleware)
server.use(router)
server.listen(3000, () => {
	console.log(`JSON Server is running...`)
})