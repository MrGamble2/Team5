const _ = require('lodash');

const getBooks = (query) => {
	const courseID = query.id;
	console.log(courseID);

	return courseID;
}


module.exports = {
	getBooks
};
