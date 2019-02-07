// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	response.render("index");
};
exports.viewFriends = function(request, response){
	console.log(data);
	response.render("friend",data);
};
