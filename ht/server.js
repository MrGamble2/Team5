const Hapi = require('hapi');
const server = new Hapi.Server();
const search = require('./search.js');

server.connection({
	host:	"localhost",
	port:	process.env.PORT || 3000,
	routes: { cors: true }
});

server.route([
	{
		method:	'GET',
		path:	'/book',
		handler:	(request, reply) => {
			reply(search.getBooks(request.query));
		}
	},
	{
		method: 'GET',
		path: '/university',
		handler: (request, reply) => {
			reply(search.getUnivCourses(request.query));
		}
	}
]);

server.start((err) => {
	if(err){
		throw err;
	}
	console.log('rest api running at: ', server.info.uri);
});
