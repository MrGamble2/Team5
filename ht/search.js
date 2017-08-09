const _ = require('lodash');
const books = require('./data/books');
const courses = require('./data/courses');

const getUnivCourses = (query) => {
	const univID = query.univName;
	const response = [];

	_.each(courses, (c) => {
		const univName = c.univ;
		if(univName === univID){
			const ID = _.find(courses, {univ: univID}).id;
			const Title = _.find(courses, {univ: univID}).title;
			const Univ = _.find(courses, {univ: univID}).univ;

			const univCourse = {
				id: ID,
				title: Title,
				univ: Univ
			}
			response.push(univCourse);
		}
	});
	
	return response;
}

const getBooks = (query) => {
	const courseID = query.id;
	console.log(courseID);
	
	const response = [];

	_.each(books, (b) => {
		const id = b.id;
		if(id === courseID){

			const Title = _.find(books, {id: courseID}).title;
			const Condition = _.find(books, {id: courseID}).condition;
			const Price = _.find(books, {id: courseID}).price;
			const Seller = _.find(books, {id: courseID}).seller;		
		

			const book = {
				title: Title,
				condition: Condition,
				price: Price,
				seller: Seller 
			}
			response.push(book);
		}
	});
		
	return response;
>>>>>>> 9d9427e601a8c38960730260a02b1a18310e1158
}


module.exports = {
	getBooks,
	getUnivCourses
};
