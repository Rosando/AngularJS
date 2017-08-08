(function(){
	var app = angular.module("app", []);
	
	app.controller("MainController", function($http){
		this.message = "Hello, AngularJS";
		
		this.person = {
			firstName: "Rosando", 
			lastName: "Desouza",
			imgSrc: "https://yt3.ggpht.com/-zOyDXCEoZug/AAAAAAAAAAI/AAAAAAAAAAA/dH6LFZUUjls/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
		};
		
		//$http.get();
	});
})();