const _ = require('lodash');


const getBooks = (query) => {
	const courseID = query.id;
	console.log(courseID);
	//search for the courses associated with the university
	return courseID;
}


module.exports = {
	getBooks
};
