import jsonServer from 'json-server'


const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


server.use((req, res, next) => setTimeout(next, 300));

server.use(router);
server.listen(8080, '0.0.0.0', () => console.log('JSON Server running'));
