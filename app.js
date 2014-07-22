var express = require('express'),
	ejs = require('ejs')
	bodyParser = require('body-parser'),
	app = express();

//create article database
var articlesArray = [];

app.use(bodyParser.urlencoded());

app.set("view engine", "ejs");

app.get('/articles/new', function(req, res){
	res.render("article_forms");
})

app.get("/articles/:id", function(req,res){
	var index = req.params.id;
	var article = articlesArray[index];
	res.render("show", {article: article})
})

app.post('/articles', function(req, res){
	console.log(req.body.article);
	articlesArray.push(req.body.article);
	res.redirect('/article');
	console.log(article);
})

app.get('/articles', function(req, res){
	res.send(articlesArray);
})


app.listen(3000, function(){
	console.log("SERVER STARTED ON localhost:3000")
})