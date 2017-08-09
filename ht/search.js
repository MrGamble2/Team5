const _ = require('lodash');
const books = require('./data/books');
const courses = require('./data/courses');

const getUnivCourses = (query) => {
	const univID = query.univName;
	const response = [];

	_.each(courses, (c) => {
		const univName = c.univ;
		if(univName === univID){
//			const ID = _.find(courses, {univ: univID}).id;
//			const Title = _.find(courses, {univ: univID}).title;
//			const Univ = _.find(courses, {univ: univID}).univ;

			const ID = c.id;
			const Title = c.title;
			const Univ = c.univ;

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

			//const Title = _.find(books, {id: courseID}).title;
			//const Condition = _.find(books, {id: courseID}).condition;
			//const Price = _.find(books, {id: courseID}).price;
			//const Seller = _.find(books, {id: courseID}).seller;		
		
			const Title = b.title;
			const Condition = b.condition;
			const Price = b.price;
			const Seller = b.seller;

			const book = {
				title: Title,
				condition: Condition,
				price: Price,
				seller: Seller 
			}
			response.push(book);
			
			console.log(book);
		}
	});
		
	return response;
}


module.exports = {
	getBooks,
	getUnivCourses
};
