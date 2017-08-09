const _ = require('lodash');
const mysql = require('mysql');



var con = mysql.createConnection({
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
});

const getBooks = (query) => {
	const courseID = query.id;
	console.log(courseID);
	return "Backend reveived " + courseID;

/*	sqlQuery(courseID,function(result){	
		var books = "not found";	
		console.log(result);
		return result;
	});
*/
}

function sqlQuery(courseID, callback){
	con.query('SELECT * FROM account WHERE CourseID="'+courseID+'"', function(err, result){
		if(err) throw err;
		result = "Result: " + result[0].CourseTitle+" "+result[0].CourseID+" "+result[0].Price+" "+result[0].Seller;
		callback(result);
	});
}

module.exports = {
	getBooks
};
