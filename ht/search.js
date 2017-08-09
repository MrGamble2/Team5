const _ = require('lodash');
//const mysql = require('mysql');



/*var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "myDB"
});

con.connect(function(err){
    if(err){
        console.log("Error connecting to Db");
        return;
    }
    console.log("Database connection established!");
});*/

const getBooks = (query) => {
	const courseID = query.id;
	console.log(courseID);
	
	var book = "Not found";

	con.query('SELECT * FROM account', function(err, result){
		if(err) throw err;
		book = "Result: " + result[0].CourseTitle+" "+result[0].CourseID+" "+result[0].Price+" "+result[0].Seller;
//		console.log(book);
		console.log("1");
		
	});

//	var sleep = require('sleep');
//	sleep.sleep(5); 
	
		console.log(book);
		while(book === "Not found") {}
		return book;
	//return "Backend reveived " + courseID;


}


module.exports = {
	getBooks
};
