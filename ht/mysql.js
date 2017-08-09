var mysql = require('mysql');

//Create a connection to the database
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "myDB"
});

//Connect to MySQL from Node.js
con.connect(function(err){
	if(err){
		console.log("Error connecting to Db");
		return;
	}
	console.log("Database connection established!");
});

con.query('SELECT * FROM account WHERE CourseID="CS310"', function(err, result){
	if(err) throw err;
	
	console.log("Result: " + result[0].CourseTitle+" "+result[0].CourseID+" "+result[0].Price+" "+result[0].Seller);
});
