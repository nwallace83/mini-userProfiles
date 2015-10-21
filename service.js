app.factory('myFactory', function() {
	var data = [
	  {
	      "id": 1,
	      "first_name": "george",
	      "last_name": "bluth",
	      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
	  },
	  {
	      "id": 2,
	      "first_name": "lucille",
	      "last_name": "bluth",
	      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
	  },
	  {
	      "id": 3,
	      "first_name": "oscar",
	      "last_name": "bluth",
	      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
	  }
  ];

function getData(inData) {
  	var data = inData; 
  	return function() {
  		return data;
  	}
};

return {
	getData : getData(data)
};


});