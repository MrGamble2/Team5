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
